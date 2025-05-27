import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { OpenModal, feedbackState } from "./types";

const initialState: feedbackState = {
  loading: { isLoading: true },
  modal: { isOpen: false, isSuccess: false, text: "" },
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading.isLoading = true;
    },
    endLoading: (state) => {
      state.loading.isLoading = false;
    },
    openModal: (
      state,
      { payload: { isSuccess, text } }: PayloadAction<OpenModal>,
    ) => {
      state.modal = { isOpen: true, isSuccess, text };
    },
    closeModal: (state) => {
      state.modal = { isOpen: false, isSuccess: false, text: "" };
    },
  },
});

export const feedbackReducer = feedbackSlice.reducer;
export const {
  startLoading: startLoadingCreator,
  endLoading: endLoadingCreator,
  openModal: openModalCreator,
  closeModal: closeModalCreator,
} = feedbackSlice.actions;
