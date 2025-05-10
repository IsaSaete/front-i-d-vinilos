import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { VinylState } from "./types";
import type { VinylsCollectionData } from "../client/types";

const initialState: VinylState = {
  vinylCollection: { vinyls: [], vinylsTotal: 0 },
};

const vinylSlice = createSlice({
  name: "vinyls",
  initialState,
  reducers: {
    loadVinyls: (
      currentState,
      action: PayloadAction<VinylsCollectionData>,
    ): VinylState => {
      return { ...currentState, vinylCollection: action.payload };
    },
  },
});

export const { loadVinyls: loadVinylActionCreator } = vinylSlice.actions;
export const vinylReducer = vinylSlice.reducer;
