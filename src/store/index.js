import { createStore } from "vuex";

/*modules imports*/
import auth from "./modules/auth";
import agenceModule from "./modules/agence";

/*Crée un store central global qui permet d'ajouter des tiers modules */

const store = createStore({
    modules: {
        auth: auth,
        agence: agenceModule,
    },
});

export default store;