import http from './PortfolioApi';

const getAllProjects = () => {
    return http.get("/projects");
  };

const getProject = id => {
      return http.get(`/projects/${id}`);
  };

const createProject = data => {
    console.log(data);
    return http.post("/projects", data);
  };

const modifyProject = (id, data) => {
      return http.put(`/projects/${id}`, data);
  };

const removeProject = id => {
    console.log(id);
    return http.delete(`/projects/${id}`);
  };



const ProjectsService = {
getAllProjects,
getProject,
createProject,
modifyProject,
removeProject
};

export default ProjectsService;