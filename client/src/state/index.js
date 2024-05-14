import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  control: "yes",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setControl: (state) => {
      state.control = state.control === "yes" ? "no" : "yes";
    },
  },
});

export const { setControl } = globalSlice.actions;

export default globalSlice.reducer;
