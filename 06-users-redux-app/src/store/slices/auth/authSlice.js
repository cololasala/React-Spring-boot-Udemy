import { createSlice } from "@reduxjs/toolkit";

export const initLogin = JSON.parse(sessionStorage.getItem("logged")) || {
  isAuth: false,
  admin: false,
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initLogin,
  reducers: {
    onLogin: (state, action) => {
      state.isAuth = true;
      state.admin = action.payload.admin;
      state.user = action.payload.user;
    },
    onLogout: (state) => {
      state.isAuth = false;
      state.admin = false;
      state.user = undefined;
    },
  },
});

export const { onLogin, onLogout } = authSlice.actions;
