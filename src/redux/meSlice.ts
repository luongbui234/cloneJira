import { createSlice } from "@reduxjs/toolkit";

const meJson: string | null = localStorage.getItem("ME");

const initialState = {
  me: meJson ? JSON.parse(meJson) : null,
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
