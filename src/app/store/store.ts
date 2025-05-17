import { configureStore } from "@reduxjs/toolkit";
import meSlice from "@/redux/meSlice";
import userSlice from "@/redux/userSlice";
import projectSlice from "@/redux/projectSlice";
import taskSlice from "@/redux/taskSlice";

export const store = configureStore({
  reducer: {
    me: meSlice,
    user: userSlice,
    project: projectSlice,
    task: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
