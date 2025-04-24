import { configureStore } from "@reduxjs/toolkit";
import meSlice from "@/redux/meSlice";

export const store = configureStore({
  reducer: {
    me: meSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
