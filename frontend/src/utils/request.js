import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8000"
  //  baseURL: "https://successful-bee-purse.cyclic.app/"
});



export default request;