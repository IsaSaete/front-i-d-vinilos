import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { VinylState } from "./types";
import type { VinylsCollectionData } from "../client/types";
import type { Vinyl } from "../../types";

const initialState: VinylState = {
  vinylCollection: { vinyls: [], vinylsTotal: 0 },
};

const vinylSlice = createSlice({
  name: "vinyls",
  initialState,
  reducers: {
    loadVinyls: (
      currentState,
      { payload: { vinyls, vinylsTotal } }: PayloadAction<VinylsCollectionData>,
    ): VinylState => {
      return {
        ...currentState,
        vinylCollection: { vinyls: [...vinyls], vinylsTotal },
      };
    },

    toggleOwnedVinyl: (
      currentState,
      action: PayloadAction<Vinyl>,
    ): VinylState => {
      return {
        vinylCollection: {
          ...currentState.vinylCollection,
          vinyls: currentState.vinylCollection.vinyls.map((vinyl) =>
            vinyl.id === action.payload.id ? action.payload : vinyl,
          ),
        },
      };
    },
  },
});

export const {
  loadVinyls: loadVinylActionCreator,
  toggleOwnedVinyl: toggleVinylOwnedCreator,
} = vinylSlice.actions;

export const vinylReducer = vinylSlice.reducer;
