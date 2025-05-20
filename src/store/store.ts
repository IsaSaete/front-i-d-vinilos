import { configureStore } from "@reduxjs/toolkit";
import { vinylReducer } from "../vinyl/slice/vinylSlice";

const store = configureStore({
  reducer: { vinyls: vinylReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
