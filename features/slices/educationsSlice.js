import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EducationsDataService from "../../services/EducationsService";

const initialState = [];

export const retrieveEducations = createAsyncThunk(
    "educations/retrieveEducations",
    async () => {
      const res = await EducationsDataService.getAllEducations();
      return res.data;
    }
);

export const retrieveEducation = createAsyncThunk(
  "educations/retrieveEducation",
  async (id) => {
    const res = await EducationsDataService.getEducation(id);
    return res.data;
  }
);

export const createEducation = createAsyncThunk(
  "educations/createEducation",
  async (data) => {
    const res = await EducationsDataService.createEducation(data);
    return res.data;
  }
);

export const updateEducation = createAsyncThunk(
  "educations/updateEducation",
  async (data) => {
    const {education_id,...info} = data
    const id = education_id
    const information = info
    const res = await EducationsDataService.modifyEducation(id, information);
    return res.data;
  }
);

export const deleteEducation = createAsyncThunk(
  "educations/deleteEducation",
  async (id) => {
    await EducationsDataService.removeEducation(id);
    return { id };
  }
);

const EducationsSlice = createSlice({
    name: "Educations",
    initialState,
    extraReducers: {
      [retrieveEducations.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [retrieveEducation.fulfilled]: (state, action) => {
        return [action.payload];
      },
      [createEducation.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [updateEducation.fulfilled]: (state, action) => {
        const index = state.findIndex(Education => Education.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [deleteEducation.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
    },
  });

export default EducationsSlice.reducer