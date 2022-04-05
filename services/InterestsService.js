import http from './PortfolioApi';

const getAllInterests = () => {
    return http.get("/interests");
  };

const getInterest = id => {
      return http.get(`/interests/${id}`);
  };

const createInterest = data => {
    return http.post("/interests", data);
  };

const modifyInterest = (id, data) => {
      return http.put(`/interests/${id}`, data);
  };

const removeInterest = id => {
    console.log(id);
    return http.delete(`/interests/${id}`);
  };



const InterestsService = {
getAllInterests,
getInterest,
createInterest,
modifyInterest,
removeInterest
};

export default InterestsService;