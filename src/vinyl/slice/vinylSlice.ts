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
      const vinylToToggledOwned = action.payload;
      const vinylId = vinylToToggledOwned.id;

      return {
        vinylCollection: {
          ...currentState.vinylCollection,
          vinyls: currentState.vinylCollection.vinyls.map((vinyl) =>
            vinyl.id === vinylId
              ? { ...vinyl, isOwned: !vinyl.isOwned }
              : vinyl,
          ),
        },
      };
    },
    deleteVinyl: (currentState, action: PayloadAction<Vinyl>): VinylState => {
      const deletedVinyl = action.payload;
      const vinylId = deletedVinyl.id;

      return {
        vinylCollection: {
          ...currentState.vinylCollection,
          vinyls: currentState.vinylCollection.vinyls.filter(
            (vinyl) => vinyl.id !== vinylId,
          ),
          vinylsTotal: currentState.vinylCollection.vinyls.length,
        },
      };
    },
    addVinyl: (currentState, action: PayloadAction<Vinyl>): VinylState => {
      const newVinyl = action.payload;

      return {
        vinylCollection: {
          vinyls: [...currentState.vinylCollection.vinyls, newVinyl],
          vinylsTotal: currentState.vinylCollection.vinyls.length,
        },
      };
    },
    getVinylById: (currentState, action: PayloadAction<Vinyl>): VinylState => {
      const selectedVinyl = action.payload;

      return {
        vinylCollection: {
          vinyls: [selectedVinyl],
          vinylsTotal: currentState.vinylCollection.vinylsTotal,
        },
      };
    },
    updatedVinyl: (currentState, action: PayloadAction<Vinyl>): VinylState => {
      const updatedVinyl = action.payload;
      const vinylId = updatedVinyl.id;

      return {
        vinylCollection: {
          ...currentState.vinylCollection,
          vinyls: currentState.vinylCollection.vinyls.map((vinyl) =>
            vinyl.id === vinylId ? updatedVinyl : vinyl,
          ),
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
  updatedVinyl: updatedVinylCreator,
} = vinylSlice.actions;

export const vinylReducer = vinylSlice.reducer;
