import { getLocalStorage } from "@/app/services/config";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: getLocalStorage(),
};

const meSlice = createSlice({
  name: "meSlice",
  initialState,
  reducers: {
    setMe: (state, action) => {
      state.me = action.payload;
    },
  },
});

export const { setMe } = meSlice.actions;

export default meSlice.reducer;
