import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogsDataService from "../../services/BlogsService";

const initialState = [];

export const retrieveBlogs = createAsyncThunk(
    "blogs/retrieveBlogs",
    async () => {
      const res = await BlogsDataService.getAllBlogs();
      return res.data;
    }
);

export const retrieveBlog = createAsyncThunk(
  "blogs/retrieveBlog",
  async (id) => {
    const res = await BlogsDataService.getBlog(id);
    return res.data;
  }
);

export const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async (data) => {
    const res = await BlogsDataService.createBlog(data);
    return res.data;
  }
);

export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async ( data ) => {
    const {blog_id,...info} = data
    const id = blog_id
    const information = info
    const res = await BlogsDataService.modifyBlog(id, information);
    return res.data;
  }
);

export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (id) => {
    await BlogsDataService.removeBlog(id);
    return { id };
  }
);

const BlogsSlice = createSlice({
    name: "Blogs",
    initialState,
    extraReducers: {
      [retrieveBlogs.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [retrieveBlog.fulfilled]: (state, action) => {
        return [action.payload];
      },
      [createBlog.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [updateBlog.fulfilled]: (state, action) => {
        const index = state.findIndex(Blog => Blog.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [deleteBlog.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
    },
  });

export default BlogsSlice.reducer