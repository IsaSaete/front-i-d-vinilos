import { configureStore } from "@reduxjs/toolkit";
import type { VinylState } from "../vinyl/slice/types";
import { vinylReducer } from "../vinyl/slice/vinylSlice";

type RootState = { vinyls: VinylState };

const setupStore = (preloadedState?: RootState) => {
  return configureStore({ reducer: { vinyls: vinylReducer }, preloadedState });
};

export default setupStore;
