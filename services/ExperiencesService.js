import http from './PortfolioApi';

const getAllExperiences = () => {
    return http.get("/experiences");
  };

const getExperience = id => {
      return http.get(`/experiences/${id}`);
  };

const createExperience = data => {
    return http.post("/experiences", data);
  };

const modifyExperience = (id,data) => {
      console.log(data)
      return http.put(`/experiences/${id}`, data);
  };

const removeExperience = id => {
    console.log(id);
    return http.delete(`/experiences/${id}`);
  };



const ExperiencesService = {
getAllExperiences,
getExperience,
createExperience,
modifyExperience,
removeExperience
};

export default ExperiencesService;