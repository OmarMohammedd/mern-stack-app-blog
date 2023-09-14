import axios from "axios";

const request = axios.create({
    baseURL: "https://cute-lime-chinchilla-shoe.cyclic.cloud"
   // baseURL: "http://localhost:8000"
});



export default request;
