import { emptyUser, IUser } from "@model/user.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: IUser;
  users: IUser[];
}
 
const initialState: UserState = {
  user: emptyUser,
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = emptyUser;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

const reducer = userSlice.reducer;
export { reducer as userReducer };
