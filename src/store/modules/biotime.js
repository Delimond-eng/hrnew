import {get, post } from "@/http";

/**
 * Vuex state
 * @returns Object states
 * */
const states = {
    departments: [],
    agences:[],
    devices:[],
    employees:[],
    positions:[]
};

/**
 * Vuex Mutations
 * @returns Object setters
 * */
const setters = {
    SET_DEPARTMENTS:(state, data) =>state.departments = data,
    SET_DEVICES:(state, data) =>state.devices = data,
    SET_EMPLOYEES:(state, data) =>state.employees = data,
    SET_POSITIONS:(state, data) =>state.positions = data,
    SET_AGENCES:(state, data) =>state.agences = data,
};

/**
 * Vuex Getters
 * @returns Object getters
 * */
const getters = {
    GET_DEPARTMENTS: (state) => state.departments,
    GET_DEVICES: (state) => state.devices,
    GET_EMPLOYEES: (state) => state.employees,
    GET_POSITIONS: (state) => state.positions,
    GET_AGENCES: (state) => state.agences,
};

/**
 * Vuex Actions
 * @returns Object actions
 * */
const actions = {

    /**
     * Create Employee position
     * @param context vuex context,
     * @param form HttpRequest FormData,
     * @returns HttpResponse
     * */
    async createPosition(context, form) {
        const formData = {
            fonction_code: form.fonction_code,
            libelle: form.libelle,
            user_id: "1"
        }
        const {data, status} = await post('api/createFonction', formData);
        return data;
    },


    async allPositions({commit}){
        const {data} = await get('api/fonctions');
        commit('SET_POSITIONS', data);
    },

    /**
     * Create Organization employees
     * @param context vuex context,
     * @param form HTTP Request formData,
     * @returns HttpResponse
     * */
    async createEmployee(context, form){
        const formData = {
            nom: form.nom,
            postnom: form.postnom,
            prenom: form.prenom,
            nationalite: form.nationalite,
            sexe: form.sexe,
            date_naissance: form.date_naissance,
            etat_civil: form.etat_civil,
            date_engagement: form.date_engagement,
            matricule: form.matricule,
            nbre_enfant: form.nbre_enfant,
            adresse: form.adresse,
            contrat_type: form.contrat_type,
            duree: form.duree,
            periode_unite: form.periode_unite,
            code_zone: form.code_zone,
            agence_id: form.agence_id,
            fonction_id: form.fonction_id,
            service_id: form.service_id,
            date_affectation: form.date_affectation,
        }
        const {data, status} = await post('api/createAgent', formData);
        return data;
    },


    /**
     * Get Employees list
     * @param commit vuex mutator
     * @returns void
     * */
    async allEmployees({commit}){
        const {data} = await get('api/agents');
        commit('SET_EMPLOYEES', data);
    },

    /**
     * Add Biotime device
     * @param context vuex context,
     * @param form Http Request data,
     * @returns HttpResponse
     * */
    async addDevice(context, form){
      let formData = {
          serie:form.serie,
          libelle: form.libelle,
          adresse_ip: form.adresse_ip,
          user_id: "1",
          agence_id: form.agence_id
      }
      const {data} = await post('api/addDevice', formData);
      return data;
    },


    /**
     * Get All biotime devices
     * @param commit mutator
     * @returns void
     * */
    async allDevices({commit}){
        let {data} = await get('api/devices');
        commit('SET_DEVICES', data);
    },


    /**
     * Get all departments list
     * @param commit vuex context commit mutator
     */
    async allDepartments({ commit }) {
        let {data} = await get("api/departments");
        commit("SET_DEPARTMENTS", data);
    },

    /**
     * Create new department
     * @param context vuex context,
     * @param form form data
     * @returns httpResponse
     */
    async createDepartment(context, form) {
        let formData = {
            dept_code: form.dept_code,
            nom: form.nom,
        };
        let {data} = await post("api/createDepartment", formData);
        return data;
    },


    /**
     * Create organization agency
     * @param context vuex context,
     * @param form Http Request FormData,
     * @returns HttpResponse
     * */
    async createAgence(context, form) {
        let formData = {
            code_zone: '3',
            libelle: form.libelle,
            province: form.province,
            commune: form.commune,
            quartier: form.quartier,
            avenue: form.avenue,
            numero: form.numero,
            user_id: "1",
        };
        const {data} = await post('api/createAgence', formData);
        return data;
    },


    /**
     * Get all Organization agencies
     * @param commit vuex mutator
     * @returns Promise<void>
     * */
    async allAgences({commit}) {
        const {data} = await get('api/agences');
        commit('SET_AGENCES', data)
    }

};

export default {
    namespaced: true,
    state: states,
    mutations: setters,
    getters: getters,
    actions: actions,
};