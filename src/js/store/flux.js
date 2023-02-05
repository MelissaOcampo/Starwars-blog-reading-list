const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            infoPersona: {},
            vehiculos: [],
            infoVehiculos: {},
            planetas: [],
            infoPlanetas: {},
            favoritos: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            obtenerInfoPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        personajes: data.results
                    }))
                    .catch(err => console.error(err))
            },

            infoDePersonaje: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        infoPersona: data.result
                    }))
                    .catch(err => console.error(err))
            },


            obtenerInfoVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({
                        vehiculos: data.results
                    }))
                    .catch(err => console.error(err))
            },

            infoDeVehiculo: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        infoVehiculos: data.result
                    }))
                    .catch(err => console.error(err))
            },

            obtenerInfoPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planetas: data.results
                    }))
                    .catch(err => console.error(err))
            },

            infoDePlanetas: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        infoPlanetas: data.result
                    }))
                    .catch(err => console.error(err))
            },


            agregarFavoritos: (name) => {
                const store = getStore();
                setStore({
                    favoritos: [...store.favoritos, name]
                });

                console.log(store.favoritos);

                console.log(name);

            },
            eliminarFavoritos: (id) => {
                const store = getStore();
                setStore({
                    favoritos: store.favoritos.filter((item) => item != id)
                });
            }
        }
    }
}

export default getState;