import api from "../../../components/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPlants = createAsyncThunk("fetchPlants", async () => {
  try {
    const response = await api.get("/plants");
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
});

export const fetchSinglePlant = createAsyncThunk(
  "fetchSinglePlant",
  async (id) => {
    try {
      const response = await api.get(`/plants/${id}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
);
export const fetchPlantByCategories = createAsyncThunk(
  "fetchPlantByCategories",
  async (query) => {
    try {
      const response = await api.get(`/plants/${query}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
);
