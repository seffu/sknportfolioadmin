import http from './PortfolioApi';

const getAllBlogs = () => {
    return http.get("/blogs");
  };

const getBlog = id => {
      return http.get(`/blogs/${id}`);
  };

const createBlog = data => {
    return http.post("/blogs", data);
  };

const modifyBlog = (id, data) => {
      return http.put(`/blogs/${id}`, data);
  };

const removeBlog = id => {
    console.log(id);
    return http.delete(`/blogs/${id}`);
  };



const BlogsService = {
getAllBlogs,
getBlog,
createBlog,
modifyBlog,
removeBlog
};

export default BlogsService;