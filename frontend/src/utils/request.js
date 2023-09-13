import axios from "axios";

const request = axios.create({
    baseURL: "https://successful-bee-purse.cyclic.app/"
});


export default request;