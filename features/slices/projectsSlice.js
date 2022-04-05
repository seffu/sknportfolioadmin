import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProjectsDataService from "../../services/ProjectsService";

const initialState = [];

export const retrieveProjects = createAsyncThunk(
    "projects/retrieveProjects",
    async () => {
      const res = await ProjectsDataService.getAllProjects();
      return res.data;
    }
);

export const retrieveProject = createAsyncThunk(
  "projects/retrieveProject",
  async (id) => {
    const res = await ProjectsDataService.getProject(id);
    return res.data;
  }
);

export const createProject = createAsyncThunk(
  "projects/createProject",
  async (data) => {
    const res = await ProjectsDataService.createProject(data);
    return res.data;
  }
);

export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async ( data ) => {
    const {project_id,...info} = data
    const id = project_id
    const information = info
    const res = await ProjectsDataService.modifyProject(id, information);
    return res.data;
  }
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id) => {
    await ProjectsDataService.removeProject(id);
    return { id };
  }
);

const ProjectsSlice = createSlice({
    name: "Projects",
    initialState,
    extraReducers: {
      [retrieveProjects.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [retrieveProject.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [createProject.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [updateProject.fulfilled]: (state, action) => {
        const index = state.findIndex(Project => Project.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [deleteProject.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
    },
  });

export default ProjectsSlice.reducer