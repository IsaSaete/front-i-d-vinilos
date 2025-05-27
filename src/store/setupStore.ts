import { configureStore } from "@reduxjs/toolkit";
import type { VinylState } from "../vinyl/slice/types";
import { vinylReducer } from "../vinyl/slice/vinylSlice";
import { feedbackReducer } from "../ui/slices/feedbackSlice";

type RootState = { vinylsInfo: VinylState };

const setupStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: { vinylsInfo: vinylReducer, feedback: feedbackReducer },
    preloadedState,
  });
};

export default setupStore;
