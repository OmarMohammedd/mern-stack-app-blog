import axios from "axios";

const request = axios.create({
    baseURL: "https://breakable-elk-overalls.cyclic.app/"
});

export default request;