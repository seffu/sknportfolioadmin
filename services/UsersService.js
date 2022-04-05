import http from './PortfolioApi';

const getAllUsers = () => {
    return http.get("/users");
  };

const getUser = id => {
      return http.get(`/users/${id}`);
  };

const createUser = data => {
    console.log(data);
    return http.post("/users", data);
  };

const modifyUser = (id, data) => {
      return http.put(`/users/${id}`, data);
  };

const removeUser = id => {
    console.log(id);
    return http.delete(`/users/${id}`);
  };



const UsersService = {
getAllUsers,
getUser,
createUser,
modifyUser,
removeUser
};

export default UsersService;