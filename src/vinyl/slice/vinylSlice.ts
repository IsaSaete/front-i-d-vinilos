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
    deleteVinyl: (currentState, action: PayloadAction<string>): VinylState => {
      return {
        vinylCollection: {
          ...currentState.vinylCollection,
          vinyls: currentState.vinylCollection.vinyls.filter(
            (vinyl) => vinyl.id !== action.payload,
          ),
          vinylsTotal: currentState.vinylCollection.vinyls.length,
        },
      };
    },
    addVinyl: (currentState, action: PayloadAction<Vinyl>): VinylState => {
      return {
        vinylCollection: {
          vinyls: [...currentState.vinylCollection.vinyls, action.payload],
          vinylsTotal: currentState.vinylCollection.vinyls.length,
        },
      };
    },
    getVinylById: (currentState, action: PayloadAction<Vinyl>): VinylState => {
      return {
        vinylCollection: {
          vinyls: [action.payload],
          vinylsTotal: currentState.vinylCollection.vinylsTotal,
        },
      };
    },
  },
});

export const {
  loadVinyls: loadVinylActionCreator,
  toggleOwnedVinyl: toggleVinylOwnedCreator,
  deleteVinyl: deleteVinylCreator,
  addVinyl: addVinylCreator,
  getVinylById: getVinylCreator,
} = vinylSlice.actions;

export const vinylReducer = vinylSlice.reducer;
