import { configureStore } from "@reduxjs/toolkit";
import { vinylReducer } from "../vinyl/slice/vinylSlice";
import { feedbackReducer } from "../ui/slices/feedbackSlice";

const store = configureStore({
  reducer: {
    vinyls: vinylReducer,
    feedback: feedbackReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
