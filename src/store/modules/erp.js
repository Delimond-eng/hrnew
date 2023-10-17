import { get, post } from "@/http";
/**
 * Vuex state
 * @returns Object state
 * */
const state = {};

/**
 * Vuex mutation
 * @returns Object mutation
 * */
const setters = {};

/**
 * Vuex Getters
 * @returns Object Getters
 * */

const getters = {};

/**
 * Vuex actions
 * @returns Object Actions
 * */
const actions = {
  /**
   * GET List of agences
   * @returns HttpResponse
   * */
  async getAgences(context, payload) {
    const { data, status } = await get("agences/all");
    if (status === 200) {
      const results = data.agences;
      let agences = [];
      if (payload !== undefined) {
        results.forEach((e) => {
          if (e.province.toLowerCase().includes(payload.toLowerCase())) {
            agences.push(e);
          }
        });
      } else {
        agences = results;
      }
      return agences;
    }
    return [];
  },
};

const erp = {
  namespaced: true,
  state: state,
  mutations: setters,
  getters: getters,
  actions: actions,
};
export default erp;
