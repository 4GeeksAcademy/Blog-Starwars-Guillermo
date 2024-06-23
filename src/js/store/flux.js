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
      fetchAPI: async (url) => {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Fetch request failed:", error);
          throw error;
        }
      },

      getListaPersonajes: async () => {
        const actions = getActions();
        try {
          const data = await actions.fetchAPI(
            `https://www.swapi.tech/api/people/`
          );
          const personajesDetailsPromises = data.results.map((personaje) =>
            actions.getPersonajes(personaje.uid)
          );
          const personajesDetails = await Promise.all(
            personajesDetailsPromises
          );
          setStore({ Personajes: personajesDetails });
        } catch (error) {
          console.error("Failed to fetch personajes list:", error);
        }
      },
      getPersonajes: async (id) => {
        const actions = getActions();
        try {
          const data = await actions.fetchAPI(
            `https://www.swapi.tech/api/people/${id}`
          );
          return data.result;
        } catch (error) {
          console.error("Failed to fetch personaje:", error);
        }
      },
      getListaVehiculos: async () => {
        const actions = getActions();
        try {
          const data = await actions.fetchAPI(
            `https://www.swapi.tech/api/vehicles/`
          );
          const vehiculosDetailsPromises = data.results.map((vehiculo) =>
            actions.getVehiculos(vehiculo.uid)
          );
          const vehiculosDetails = await Promise.all(vehiculosDetailsPromises);
          setStore({ Vehiculos: vehiculosDetails });
        } catch (error) {
          console.error("Failed to fetch vehiculos list:", error);
        }
      },
      getVehiculos: async (id) => {
        const actions = getActions();
        try {
          const data = await actions.fetchAPI(
            `https://www.swapi.tech/api/vehicles/${id}`
          );
          return data.result;
        } catch (error) {
          console.error("Failed to fetch vehiculo:", error);
        }
      },
      getListaPlanetas: async () => {
        const actions = getActions();
        try {
          const data = await actions.fetchAPI(
            `https://www.swapi.tech/api/planets/`
          );
          const planetasDetailsPromises = data.results.map((planeta) =>
            actions.getPlanetas(planeta.uid)
          );
          const planetasDetails = await Promise.all(planetasDetailsPromises);
          setStore({ Planetas: planetasDetails });
        } catch (error) {
          console.error("Failed to fetch planetas list:", error);
        }
      },
      getPlanetas: async (id) => {
        const actions = getActions();
        try {
          const data = await actions.fetchAPI(
            `https://www.swapi.tech/api/planets/${id}`
          );
          return data.result;
        } catch (error) {
          console.error("Failed to fetch planeta:", error);
        }
      },
      addFav: (element) => {
        const store = getStore();
        setStore({ Favoritos: [...store.Favoritos, element] });
      },
      deleteFav: (id) => {
        const store = getStore();
        const updatedFavoritos = store.Favoritos.filter(
          (fav) => fav._id !== id
        );
        setStore({ Favoritos: updatedFavoritos });
      },
    },
  };
};

export default getState;
