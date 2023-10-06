import { createStore } from "vuex";

/*modules imports*/
import auth from "./modules/auth";
import agencyModule from "./modules/agence";

/*Crée un store central global qui permet d'ajouter des tiers modules */

const store = createStore({
  modules: {
    auth: auth,
    agency: agencyModule
  },
});

export default store;
