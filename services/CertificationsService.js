import http from './PortfolioApi';

const getAllCertifications = () => {
    return http.get("/certifications");
  };

const getCertification = id => {
      return http.get(`/certifications/${id}`);
  };

const createCertification = data => {
    return http.post("/certifications", data);
  };

const modifyCertification = (id, data) => {
      return http.put(`/certifications/${id}`, data);
  };

const removeCertification = id => {
    console.log(id);
    return http.delete(`/certifications/${id}`);
  };



const CertificationsService = {
getAllCertifications,
getCertification,
createCertification,
modifyCertification,
removeCertification
};

export default CertificationsService;