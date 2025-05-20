import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ModalState, OpenModal } from "./types";

const initialState: ModalState = {
  isOpen: false,
  isSuccess: false,
  text: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      _state,
      { payload: { isSuccess, text } }: PayloadAction<OpenModal>,
    ): ModalState => {
      return {
        isOpen: true,
        isSuccess,
        text,
      };
    },
    closeModal: (): ModalState => {
      return { isOpen: false, isSuccess: false, text: "" };
    },
  },
});

export const { openModal: openModalCreator, closeModal: closeModalCreator } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
