import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import InterestsDataService from "../../services/InterestsService";

const initialState = [];

export const retrieveInterests = createAsyncThunk(
    "interests/retrieveInterests",
    async () => {
      const res = await InterestsDataService.getAllInterests();
      return res.data;
    }
);

export const retrieveInterest = createAsyncThunk(
  "interests/retrieveInterest",
  async (id) => {
    const res = await InterestsDataService.getInterest(id);
    return res.data;
  }
);

export const createInterest = createAsyncThunk(
  "interests/createInterest",
  async (data) => {
    const res = await InterestsDataService.createInterest(data);
    return res.data;
  }
);

export const updateInterest = createAsyncThunk(
  "interests/updateInterest",
  async ( data ) => {
    const {interest_id,...info} = data
    const id = interest_id
    const information = info
    const res = await InterestsDataService.modifyInterest(id, info);
    return res.data;
  }
);

export const deleteInterest = createAsyncThunk(
  "interests/deleteInterest",
  async (id) => {
    await InterestsDataService.removeInterest(id);
    return { id };
  }
);

const InterestsSlice = createSlice({
    name: "Interests",
    initialState,
    extraReducers: {
      [retrieveInterests.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [retrieveInterest.fulfilled]: (state, action) => {
        return [action.payload];
      },
      [createInterest.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [updateInterest.fulfilled]: (state, action) => {
        const index = state.findIndex(Interest => Interest.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [deleteInterest.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
    },
  });

export default InterestsSlice.reducer