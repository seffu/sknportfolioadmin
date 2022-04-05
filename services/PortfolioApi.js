import axios from "axios";

export default axios.create({
  // baseURL: "http://127.0.0.1:8000/",
  baseURL: "https://sknportfolio.herokuapp.com/",

  headers: {
    "Content-type": "application/json",
  }
});

const api =  axios.create({
  // baseURL: "http://127.0.0.1:8000/",
  baseURL: "https://sknportfolio.herokuapp.com/",
  headers: {
      'accept': 'application/json',
      'Content-Type': 'multipart/form-data'
  }
});