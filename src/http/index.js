import axios from "axios";

var baseURL = "http://backend-payroll.milleniumhorizon.com/";

/**
 * Create a new axios instance
 * */
const instance = axios.create({
    baseURL: baseURL,
});

// before a request is made start the nprogress
instance.interceptors.request.use((config) => {
    //NProgress.start();
    return config;
});

// before a response is returned stop nprogress
instance.interceptors.response.use((response) => {
    //NProgress.done();
    return response;
});

/***
 * Fait passer les requetes HTTP en GET ou en POST,
 * si data est defini c'est la requete POST qui sera lancée,
 * Autrement c'est la requete GET qui sera lancer
 * @param {String} [url=null]
 * @param {Object} data
 * @returns {data, status} data: http response if status equal 200 or 201
 */

export async function post(url, formData, header = null) {
    let { data } = await instance.post(url, formData, {
        headers: header !== null ? header : {},
    });
    return data;
}

export async function get(url, header = null) {
    let { data } = await instance.get(url, {
        headers: header !== null ? header : {},
    });
    return data;
}