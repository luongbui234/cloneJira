import { getLocalStorage } from "@/app/services/config";
import { Me } from "@/app/types/me";
import { createSlice } from "@reduxjs/toolkit";

interface Props {
  me: Me;
}

const initialState: Props = {
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
