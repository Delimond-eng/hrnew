import { createStore } from "vuex";

/*modules imports*/
import auth from "./modules/auth";
/*Crée un store central global qui permet d'ajouter des tiers modules */
const store = createStore({
  modules: {
    auth: auth,
  },
  state: {
    services: [],
  },
  getters: {
    GET_SERVICES: (state) => state.services,
  },
  mutations: {
    SET_SERVICES(state, data) {
      state.services = data;
    },
  },
  actions: {
    /**
     * Faire une requête pour  voir les services
     */
    viewServices({ commit }) {
      const url = "http://dev.pavieholding.net/dashboard/services?no_template";
      return new Promise((resolve, reject) => {
        /*   ajax options */
        var options = {
          type: "GET",
          url: url,
          success: (response) => {
            console.log(JSON.stringify(response));

            resolve(response);
          },
          /*request error callback*/
          error: (e) => {
            console.log(JSON.stringify(e));
            reject("errer de la requête !");
          },
        };
        /*ajax request*/
        $.ajax(options);
      });
    },
  },
});

export default store;
