import { User } from "@/app/types/user";
import { createSlice } from "@reduxjs/toolkit";

interface Props {
  listUser: User[];
  editUser: User;
}

const initialState: Props = {
  listUser: [],
  editUser: {
    userId: 0,
    email: "",
    passWord: "",
    name: "",
    phoneNumber: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setListUser: (state, action) => {
      state.listUser = action.payload;
    },
    setEditUser: (state, action) => {
      state.editUser = action.payload;
    },
  },
});

export const { setListUser, setEditUser } = userSlice.actions;

export default userSlice.reducer;
