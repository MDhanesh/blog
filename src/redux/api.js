import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/",
});

// For Login,SignIn and GoogleSignIn
export const signIn = (formData) => API.post("/signin", formData);
export const signUp = (formData) => API.post("/signup", formData);

// to createBlog
export const createBlog = (value) => {
  return API.post("/blog/create", value);
};
export const getBlog = () => {
  return API.get("/blog/get");
};
export const particularBlog = (id) => API.get(`/blog/${id}`);
export const getBlogByUser = (id) => API.get(`/blog/userBlog/${id}`);
export const deleteBlog = (id) => API.delete(`/blog/delete/${id}`);
export const updateBlog = (updatedBlogData, id) => {
  return API.patch(`/blog/update/${id}`, updatedBlogData);
};
