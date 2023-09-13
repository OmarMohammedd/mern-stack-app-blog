import axios from "axios";

const request = axios.create({
    baseURL: "https://kind-gray-shark-veil.cyclic.app/"
});


export default request;