import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UsersDataService from "../../services/UsersService";

const initialState = [];

export const retrieveUsers = createAsyncThunk(
    "users/retrieveUsers",
    async () => {
      const res = await UsersDataService.getAllUsers();
      return res.data;
    }
);

export const retrieveUser = createAsyncThunk(
  "users/retrieveUser",
  async (id) => {
    const res = await UsersDataService.getUser(id);
    return res.data;
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (data) => {
    const res = await UsersDataService.createUser(data);
    return res.data;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ( data ) => {
    const {user_id,...info} = data
    const id = user_id
    const res = await UsersDataService.modifyUser(id, info);
    return res.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    await UsersDataService.removeUser(id);
    return { id };
  }
);

const UsersSlice = createSlice({
    name: "Users",
    initialState,
    extraReducers: {
      [retrieveUsers.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [retrieveUser.fulfilled]: (state, action) => {
        return [action.payload];
      },
      [createUser.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [updateUser.fulfilled]: (state, action) => {
        const index = state.findIndex(User => User.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [deleteUser.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
    },
  });

export default UsersSlice.reducer