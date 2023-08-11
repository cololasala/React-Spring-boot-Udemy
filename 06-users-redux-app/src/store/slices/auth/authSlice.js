import { createSlice } from "@reduxjs/toolkit";

export const initLogin = JSON.parse(sessionStorage.getItem("logged")) || {
  isAuth: false,
  admin: false,
  user: undefined,
  isLoginLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initLogin,
  reducers: {
    onLogin: (state, action) => {
      state.isAuth = true;
      state.admin = action.payload.admin;
      state.user = action.payload.user;
      state.isLoginLoading = false;
    },
    onLogout: (state) => {
      state.isAuth = false;
      state.admin = false;
      state.user = undefined;
      state.isLoginLoading = false;
    },
    onLoginLoading: (state, action) => {
      state.isLoginLoading = action.payload;
    },
  },
});

export const { onLogin, onLogout, onLoginLoading } = authSlice.actions;
