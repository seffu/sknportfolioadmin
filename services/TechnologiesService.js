import http from './PortfolioApi';

const getAllTechnologies = () => {
    return http.get("/technologies");
  };

const getTechnology = id => {
      return http.get(`/technologies/${id}`);
  };

const createTechnology = data => {
    return http.post("/technologies", data);
  };

const modifyTechnology = (id, data) => {
      return http.put(`/technologies/${id}`, data);
  };

const removeTechnology = id => {
    console.log(id);
    return http.delete(`/technologies/${id}`);
  };



const TechnologiesService = {
getAllTechnologies,
getTechnology,
createTechnology,
modifyTechnology,
removeTechnology
};

export default TechnologiesService;