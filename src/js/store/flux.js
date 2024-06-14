const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      Personajes: [],
      Vehiculos: [],
      Planetas: [],
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
          console.log("GETdata", data.results);

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
          console.log("GETdata", data.result);

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
          console.log("GETdata", data.results);

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
          console.log("GETdata", data.result);

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
          console.log("GETdata", data.results);

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
          console.log("GETdata", data.result);

          return data.result;
        } catch (error) {
          console.error("Fetch request failed:", error);
        }
      },
    },
  };
};

export default getState;
