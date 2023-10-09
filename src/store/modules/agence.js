import {get, post } from "@/http";

/**
 * Vuex state
 * @returns Object states
 * */
const states = {
    agences: [],
};

/**
 * Vuex Mutations
 * @returns Object setters
 * */
const setters = {
    SET_AGENCE(state, data) {
        state.agences = data;
    },
};

/**
 * Vuex Getters
 * @returns Object getters
 * */
const getters = {
    GET_AGENCIES: (state) => state.agences,
};

/**
 * Vuex Actions
 * @returns Object actions
 * */
const actions = {
    /**
     * La liste des toutes les agences
     */
    async all({ commit }) {
        var data = [];

        commit("SET_AGENCE", data);
    },

    /**
     * Creation d'une nouvelle agence
     */
    async create(context, data) {
        let formData = {
            libelle: data.libelle,
            province: data.province,
            commune: data.commune,
            quartier: data.quartier,
            avenue: data.avenue,
            user_id: "1",
        };
        let response = await post("agences/add", formData);
        return response;
    },
};

export default {
    namespaced: true,
    state: states,
    mutations: setters,
    getters: getters,
    actions: actions,
};