import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state";

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export default store;
