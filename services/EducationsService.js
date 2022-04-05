import http from './PortfolioApi';

const getAllEducations = () => {
    return http.get("/educations");
  };

const getEducation = id => {
      return http.get(`/educations/${id}`);
  };

const createEducation = data => {
    return http.post("/educations", data);
  };

const modifyEducation = (id, data) => {
      return http.put(`/educations/${id}`, data);
  };

const removeEducation = id => {
    console.log(id);
    return http.delete(`/educations/${id}`);
  };



const EducationsService = {
getAllEducations,
getEducation,
createEducation,
modifyEducation,
removeEducation
};

export default EducationsService;