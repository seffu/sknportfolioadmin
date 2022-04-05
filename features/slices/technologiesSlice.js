import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TechnologiesDataService from "../../services/TechnologiesService";

const initialState = [];

export const retrieveTechnologies = createAsyncThunk(
    "technologies/retrieveTechnologies",
    async () => {
      const res = await TechnologiesDataService.getAllTechnologies();
      return res.data;
    }
);

export const retrieveTechnology = createAsyncThunk(
  "technologies/retrieveTechnology",
  async (id) => {
    const res = await TechnologiesDataService.getTechnology(id);
    return res.data;
  }
);

export const createTechnology = createAsyncThunk(
  "technologies/createTechnology",
  async (data) => {
    const res = await TechnologiesDataService.createTechnology(data);
    return res.data;
  }
);

export const updateTechnology = createAsyncThunk(
  "technologies/updateTechnology",
  async ( data ) => {
    const {technology_id,...info} = data
    const id = technology_id
    const information = info
    const res = await TechnologiesDataService.modifyTechnology(id, information);
    return res.data;
  }
);

export const deleteTechnology = createAsyncThunk(
  "technologies/deleteTechnology",
  async (id) => {
    await TechnologiesDataService.removeTechnology(id);
    return { id };
  }
);

const TechnologiesSlice = createSlice({
    name: "Technologies",
    initialState,
    extraReducers: {
      [retrieveTechnologies.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [retrieveTechnology.fulfilled]: (state, action) => {
        return [action.payload];
      },
      [createTechnology.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [updateTechnology.fulfilled]: (state, action) => {
        const index = state.findIndex(Technology => Technology.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [deleteTechnology.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
    },
  });

export default TechnologiesSlice.reducer