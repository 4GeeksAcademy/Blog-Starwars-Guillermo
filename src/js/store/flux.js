import LukeSkywalker from "/src/img/Personajes/luke-skywalker.webp";
import c3po from "/src/img/Personajes/c-3po.webp";
import r2d2 from "/src/img/Personajes/r2-d2-.webp";
import DarthVader from "/src/img/Personajes/dv2.jpg";
import Leia from "/src/img/Personajes/Leia-Organa.jpg";
import Owen from "/src/img/Personajes/owen.webp"
import Beru from "/src/img/Personajes/Beru.jpeg"
import R5D4 from "/src/img/Personajes/R5-D4.webp"
import Biggs from "/src/img/Personajes/Biggs Darklighter.jpeg"
import ObiWan from "/src/img/Personajes/Obi-Wan Kenobi.webp"

import sandCrawler from "/src/img/Vehiculos/Sandcrawler.webp"

import Tatooine from "/src/img/Planetas/Tatooine.webp"

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      Personajes: [],
      Vehiculos: [],
      Planetas: [],
      ImagenesPersonajes: {
        "Luke Skywalker": LukeSkywalker,
        "C-3PO": c3po,
        "R2-D2": r2d2,
        "Darth Vader": DarthVader,
        "Leia Organa": Leia,
        "Owen Lars" : Owen,
        "Beru Whitesun lars" : Beru,
        "R5-D4" : R5D4,
        "Biggs Darklighter" : Biggs,
        "Obi-Wan Kenobi" : ObiWan,
      },
      ImagenesVehiculos: {
        "Sand Crawler" : sandCrawler
      },
      ImagenesPlanetas: {
        "Tatooine" : Tatooine
      }
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

          // Fetch details for each character
          const personajesDetailsPromises = data.results.map((personaje) =>
            actions.getPersonajes(personaje.uid)
          );
          const personajesDetails = await Promise.all(
            personajesDetailsPromises
          );

          // Update store with detailed character information
          setStore({ Personajes: personajesDetails });

          return personajesDetails;
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

          // Fetch details for each character
          const VehiculosDetailsPromises = data.results.map((Vehiculos) =>
            actions.getVehiculos(Vehiculos.uid)
          );
          const VehiculosDetails = await Promise.all(VehiculosDetailsPromises);

          // Update store with detailed character information
          setStore({ Vehiculos: VehiculosDetails });

          return VehiculosDetails;
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

          // Fetch details for each character
          const PlanetasDetailsPromises = data.results.map((Planetas) =>
            actions.getPlanetas(Planetas.uid)
          );
          const PlanetasDetails = await Promise.all(PlanetasDetailsPromises);

          // Update store with detailed character information
          setStore({ Planetas: PlanetasDetails });

          return PlanetasDetails;
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
    },
  };
};

export default getState;
