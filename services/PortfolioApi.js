import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-type": "application/json",
  }
});

const api =  axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
      'accept': 'application/json',
      'Content-Type': 'multipart/form-data'
  }
});