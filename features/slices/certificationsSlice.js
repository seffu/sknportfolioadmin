import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CertificationsDataService from "../../services/CertificationsService";

const initialState = [];

export const retrieveCertifications = createAsyncThunk(
    "certifications/retrieveCertifications",
    async () => {
      const res = await CertificationsDataService.getAllCertifications();
      return res.data;
    }
);

export const retrieveCertification = createAsyncThunk(
  "certifications/retrieveCertification",
  async (id) => {
    const res = await CertificationsDataService.getCertification(id);
    return res.data;
  }
);

export const createCertification = createAsyncThunk(
  "certifications/createCertification",
  async (data) => {
    const res = await CertificationsDataService.createCertification(data);
    return res.data;
  }
);

export const updateCertification = createAsyncThunk(
  "certifications/updateCertification",
  async ( data ) => {
    const {certification_id,...info} = data
    const id = certification_id
    const information = info
    const res = await CertificationsDataService.modifyCertification(id, information);
    return res.data;
  }
);

export const deleteCertification = createAsyncThunk(
  "certifications/deleteCertification",
  async (id) => {
    await CertificationsDataService.removeCertification(id);
    return { id };
  }
);

const CertificationsSlice = createSlice({
    name: "Certifications",
    initialState,
    extraReducers: {
      [retrieveCertifications.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [retrieveCertification.fulfilled]: (state, action) => {
        return [action.payload];
      },
      [createCertification.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [updateCertification.fulfilled]: (state, action) => {
        const index = state.findIndex(Certification => Certification.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [deleteCertification.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
    },
  });

export default CertificationsSlice.reducer