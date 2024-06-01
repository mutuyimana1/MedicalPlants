import { createSlice } from "@reduxjs/toolkit";
import { fetchPlants, fetchSinglePlant } from "./plantThunks";

const initialState = {
  is_plant_loading: false,
  is_plants_loading: false,
  plant: {},
  plants: [],
};

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.is_plants_loading = true;
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        const data = action.payload;
        state.is_plants_loading = false;
        state.plants = data;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        console.log(action.error.message, "error");
        state.is_plants_loading = false;
      })
      .addCase(fetchSinglePlant.pending, (state) => {
        state.is_plant_loading = true;
      })
      .addCase(fetchSinglePlant.fulfilled, (state, action) => {
        const data = action.payload;
        state.is_plant_loading = false;
        state.plant = data;
      })
      .addCase(fetchSinglePlant.rejected, (state, action) => {
        console.log(action.error.message, "error");
        state.is_plant_loading = false;
      });
  },
});

export default plantsSlice.reducer;
