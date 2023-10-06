
/**
 * Vuex state
 * @returns Object states
 * */
const states = {
    agencies:[]
}


/**
 * Vuex Mutations
 * @returns Object setters
 * */
const setters = {
    SET_AGENCY(state, data){
        state.agencies.push(data);
    }
}

/**
 * Vuex Getters
 * @returns Object getters
 * */
const getters = {
    GET_AGENCIES:(state)=>state.agencies
}


/**
 * Vuex Actions
 * @returns Object actions
 * */
const actions = {
    create({commit}, payload){
        commit('SET_AGENCY', payload);
    }
}

export default {
    namespaced: true,
    state: states,
    mutations: setters,
    getters: getters,
    actions: actions
}