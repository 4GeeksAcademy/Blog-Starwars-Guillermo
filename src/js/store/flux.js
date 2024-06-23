import Tatooine from "/src/img/Planetas/Tatooine.webp";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      Personajes: [],
      Vehiculos: [],
      Planetas: [],
      Favoritos: [],
      ImagenesPlanetas: {
        tatooine: Tatooine,
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
      deleteFav: (_id) => {
        const store = getStore();
        const newListFav = store.Favoritos.filter((fav) => fav._id !== _id);
        setStore({ Favoritos: newListFav });
        console.log(_id);
      },
    },
  };
};

export default getState;
