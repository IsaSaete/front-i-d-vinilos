import { configureStore } from "@reduxjs/toolkit";
import { vinylReducer } from "../vinyl/slice/vinylSlice";
import { modalReducer } from "../slices/modalSlice";

const store = configureStore({
  reducer: { vinyls: vinylReducer, modal: modalReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
