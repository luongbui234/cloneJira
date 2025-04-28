import { configureStore } from "@reduxjs/toolkit";
import meSlice from "@/redux/meSlice";
import userSlice from "@/redux/userSlice";

export const store = configureStore({
  reducer: {
    me: meSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
