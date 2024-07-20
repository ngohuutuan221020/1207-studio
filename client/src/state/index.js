import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProject } from "service";

export const fetchProjects = createAsyncThunk(
  "global/fetchProjects",
  async () => {
    const response = await getAllProject();
    return response.data.data;
  }
);

const initialState = {
  dataProject: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.dataProject = action.payload;
    });
  },
});

// export const {  } = globalSlice.actions;

export default globalSlice.reducer;
