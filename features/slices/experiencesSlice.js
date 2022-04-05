import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ExperiencesDataService from "../../services/ExperiencesService";

const initialState = [];

export const retrieveExperiences = createAsyncThunk(
    "experiences/retrieveExperiences",
    async () => {
      const res = await ExperiencesDataService.getAllExperiences();
      return res.data;
    }
);

export const retrieveExperience = createAsyncThunk(
  "experiences/retrieveExperience",
  async (id) => {
    const res = await ExperiencesDataService.getExperience(id);
    return res.data;
  }
);

export const createExperience = createAsyncThunk(
  "experiences/createExperience",
  async (data) => {
    const res = await ExperiencesDataService.createExperience(data);
    return res.data;
  }
);

export const updateExperience = createAsyncThunk(
  "experiences/updateExperience",
  async ( data ) => {
    const {experience_id,...info} = data
    const id = experience_id
    const information = info
    const res = await ExperiencesDataService.modifyExperience(id, information);
    return res.data;
  }
);

export const deleteExperience = createAsyncThunk(
  "experiences/deleteExperience",
  async (id) => {
    await ExperiencesDataService.removeExperience(id);
    return { id };
  }
);

const ExperiencesSlice = createSlice({
    name: "Experiences",
    initialState,
    extraReducers: {
      [retrieveExperiences.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [retrieveExperience.fulfilled]: (state, action) => {
        return [action.payload];
      },
      [createExperience.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [updateExperience.fulfilled]: (state, action) => {
        const index = state.findIndex(Experience => Experience.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [deleteExperience.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
    },
  });

export default ExperiencesSlice.reducer