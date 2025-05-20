import { createSlice } from "@reduxjs/toolkit";
import type { LoadingState } from "./types";

const initialState: LoadingState = {
  isLoading: true,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const loadingReducer = loadingSlice.reducer;
export const {
  startLoading: startLoadingCreator,
  endLoading: endLoadingCreator,
} = loadingSlice.actions;
