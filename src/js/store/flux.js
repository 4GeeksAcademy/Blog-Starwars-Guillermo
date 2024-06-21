import LukeSkywalker from "/src/img/Personajes/luke-skywalker.webp";
import c3po from "/src/img/Personajes/c-3po.webp";
import r2d2 from "/src/img/Personajes/r2-d2-.webp";
import DarthVader from "/src/img/Personajes/dv2.jpg";
import Leia from "/src/img/Personajes/Leia-Organa.jpg";
import Owen from "/src/img/Personajes/owen.webp";
import Beru from "/src/img/Personajes/Beru.jpeg";
import R5D4 from "/src/img/Personajes/R5-D4.webp";
import Biggs from "/src/img/Personajes/Biggs Darklighter.jpeg";
import ObiWan from "/src/img/Personajes/Obi-Wan Kenobi.webp";
import sandCrawler from "/src/img/Vehiculos/Sandcrawler.webp";
import Tatooine from "/src/img/Planetas/Tatooine.webp";
import x34 from "/src/img/Vehiculos/x-34.jpeg"
import t16skyhopper from "/src/img/Vehiculos/T-16 skyhopper.jpg"
import tielnstarfighter from "/src/img/Vehiculos/TIELN starfighter.jpeg"
import snowspeeder from "/src/img/Vehiculos/snowspeeder.jpeg"
import ATAT from "/src/img/Vehiculos/atat.jpg"
import TIEbomber from "/src/img/Vehiculos/TIE_Bomber.webp"





const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      Personajes: [],
      Vehiculos: [],
      Planetas: [],
      Favoritos: [],
      ImagenesPersonajes: {
        "Luke Skywalker": LukeSkywalker,
        "C-3PO": c3po,
        "R2-D2": r2d2,
        "Darth Vader": DarthVader,
        "Leia Organa": Leia,
        "Owen Lars": Owen,
        "Beru Whitesun lars": Beru,
        "R5-D4": R5D4,
        "Biggs Darklighter": Biggs,
        "Obi-Wan Kenobi": ObiWan,
      },
      ImagenesVehiculos: {
        "Sand Crawler": sandCrawler,
        "X-34 landspeeder": x34,
        "T-16 skyhopper": t16skyhopper,
        "TIE/LN starfighter": tielnstarfighter,
        "Snowspeeder": snowspeeder,
        "AT-AT" : ATAT,
        "TIE bomber": TIEbomber,
        


      },
      ImagenesPlanetas: {
        Tatooine: Tatooine,
      },
    },
    actions: {
      getListaPersonajes: async () => {
        const actions = getActions();
        try {
          const response = await fetch(`https://www.swapi.tech/api/people/`, {
            method: "GET",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();

          const personajesDetailsPromises = data.results.map((personaje) =>
            actions.getPersonajes(personaje.uid)
          );
          const personajesDetails = await Promise.all(
            personajesDetailsPromises
          );

          setStore({ Personajes: personajesDetails });
        } catch (error) {
          console.error("Fetch request failed:", error);
        }
      },
      getPersonajes: async (id) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/people/${id}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();

          return data.result;
        } catch (error) {
          console.error("Fetch request failed:", error);
        }
      },
      getListaVehiculos: async () => {
        const actions = getActions();
        try {
          const response = await fetch(`https://www.swapi.tech/api/vehicles/`, {
            method: "GET",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();

          const vehiculosDetailsPromises = data.results.map((vehiculo) =>
            actions.getVehiculos(vehiculo.uid)
          );
          const vehiculosDetails = await Promise.all(vehiculosDetailsPromises);

          setStore({ Vehiculos: vehiculosDetails });
        } catch (error) {
          console.error("Fetch request failed:", error);
        }
      },
      getVehiculos: async (id) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/vehicles/${id}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();

          return data.result;
        } catch (error) {
          console.error("Fetch request failed:", error);
        }
      },
      getListaPlanetas: async () => {
        const actions = getActions();
        try {
          const response = await fetch(`https://www.swapi.tech/api/planets/`, {
            method: "GET",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();

          const planetasDetailsPromises = data.results.map((planeta) =>
            actions.getPlanetas(planeta.uid)
          );
          const planetasDetails = await Promise.all(planetasDetailsPromises);

          setStore({ Planetas: planetasDetails });
        } catch (error) {
          console.error("Fetch request failed:", error);
        }
      },
      getPlanetas: async (id) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/planets/${id}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();

          return data.result;
        } catch (error) {
          console.error("Fetch request failed:", error);
        }
      },
      addFav: (element) => {
        const store = getStore();
        const updatedFavoritos = [...store.Favoritos, element];
        setStore({ Favoritos: updatedFavoritos });
      },
    },
  };
};

export default getState;
