import { get, post } from "@/http";
/**
 * Vuex state
 * @returns Object state
 * */
const state = {
  agences: [],
  baremes: [],
  agents: [],
  categories: [],
  configs: {},
};

/**
 * Vuex mutation
 * @returns Object mutation
 * */
const setters = {
  SET_AGENCES: (state, data) => (state.agences = data),
  SET_AGENTS: (state, data) => (state.agents = data),
  SET_BAREMES: (state, data) => (state.baremes = data),
  SET_CATEGORIES: (state, data) => (state.categories = data),
  SET_CONFIGS: (state, data) => (state.configs = data),
};

/**
 * Vuex Getters
 * @returns Object Getters
 * */

const getters = {
  GET_AGENCES: (state) => state.agences,
  GET_AGENTS: (state) => state.agents,
  GET_CATEGORIES: (state) => state.categories,
  GET_BAREMES: (state) => state.baremes,
  GET_CONFIGS: (state) => state.configs,
};

/**
 * Vuex actions
 * @returns Object Actions
 * */
const actions = {
  /**
   * Get all agents
   * @return Array agents
   */
  async allAgents({ commit }) {
    let { data, status } = await get("dashboard/agents/all");
    if (status === 200) {
      let agents = data.agents;
      commit("SET_AGENTS", agents);
      return agents;
    } else {
      return [];
    }
  },

  /**
   * GET List of agences
   * @returns HttpResponse
   * */
  async allAgences({ commit }, payload) {
    let { data, status } = await get("agences/all");
    if (status === 200) {
      let results = data.agences;
      let agences = [];
      if (payload !== undefined) {
        results.forEach((e) => {
          if (e.province.toLowerCase().includes(payload.toLowerCase())) {
            agences.push(e);
          }
        });
      } else {
        agences = data.agences;
      }
      commit("SET_AGENCES", agences);
      return agences;
    }
    return [];
  },

  /**
   * GET List of Categories salariales
   * @returns List<Category> categories
   */
  async allCategories({ commit }) {
    let { data, status } = await get(
      "dashboard/baremes/all/categoriesalariales"
    );
    if (status === 200) {
      let categories = data.categorie_salariales;
      commit("SET_CATEGORIES", categories);
      return categories;
    } else {
      return [];
    }
  },

  /**
   * GET all baremes
   * @returns List<Bareme> baremes AS HTTResponse
   */
  async allBaremes({ commit }) {
    let { data, status } = await get("dashboard/baremes/all");
    if (status === 200) {
      let baremes = data.baremes;
      commit("SET_BAREMES", baremes);
      return baremes;
    } else {
      return [];
    }
  },

  /**
   * Create new bareme
   * @param {Vuex} context
   * @param {FormData} payload
   * @returns HttpRespone
   */
  async createBareme(context, payload) {
    payload.user_id = "1";
    let { data, status } = await post("dashboard/baremes/add", payload);
    console.log(JSON.stringify(data));
    if (status === 200) {
      return data;
    } else {
      return false;
    }
  },

  /**
   * Configurer prime
   * @param {Vuex} context
   * @param {FormData} payload
   * @returns HttpRespone
   */
  async configPrime(context, payload) {
    payload.user_id = "1";
    let { data, status } = await post("dashboard/config/primes", payload);
    if (status === 200) {
      return data;
    } else {
      return false;
    }
  },

  /**
   * Configurer heure des pointages
   * @param {Vuex} context
   * @param {FormData} payload
   * @returns HttpRespone
   */
  async configHeures(context, payload) {
    payload.user_id = "1";
    let { data, status } = await post("dashboard/pointages/config", payload);
    console.log(JSON.stringify(data));
    if (status === 200) {
      return data;
    } else {
      return false;
    }
  },

  /**
   * Configurer heures supplementaire
   * @param {Vuex} context
   * @param {FormData} payload
   * @returns HttpRespone
   */
  async configHeureSup(context, payload) {
    payload.user_id = "1";
    let { data, status } = await post("dashboard/config/heuresup", payload);
    console.log(JSON.stringify(data));
    if (status === 200) {
      return data;
    } else {
      return false;
    }
  },

  /**
   * GET all Configs
   * @returns Objects
   */
  async allConfigs({ commit }) {
    let { data, status } = await get("dashboard/config/all");
    if (status === 200) {
      let configs = data.config;
      commit("SET_CONFIGS", configs);
      return configs;
    }
    return [];
  },

  /**
   * Affecter primes
   * @param {Vuex} context
   * @param {FormData} payload
   * @returns HttpRespone
   */
  async affecterPrime(context, payload) {
    console.log(JSON.stringify(payload));
    payload.user_id = "1";
    let { data, status } = await post(
      "dashboard/agents/affecterPrime",
      payload
    );
    console.log(JSON.stringify(data));
    if (status === 200) {
      return data;
    } else {
      return false;
    }
  },
  /**
   * Affecter primes
   * @param {Vuex} context
   * @param {FormData} payload
   * @returns HttpRespone
   */
  async affecterAgent(context, payload) {
    console.log(JSON.stringify(payload));
    payload.user_id = "1";
    let { data, status } = await post("dashboard/agents/affecter", payload);
    console.log(JSON.stringify(data));
    if (status === 200) {
      return data;
    } else {
      return false;
    }
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
