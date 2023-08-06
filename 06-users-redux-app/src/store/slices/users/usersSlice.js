import { createSlice } from "@reduxjs/toolkit";

export const initForm = {
  id: 0,
  username: "",
  email: "",
  password: "",
  admin: false,
};

const initialErrors = {
  username: "",
  email: "",
  password: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userSelected: initForm,
    openModal: false,
    errors: initialErrors,
  },
  reducers: {
    //todo lo que esta dentro de reducers serian cada una de las funciones que teniamos en el usersReducers, estas funciones se llaman actions
    addUserAction: (state, action) => {
      state.users = [
        //el state.users de aca hace referencia al users[] del initialState de arriba
        ...state.users,
        {
          ...action.payload,
        },
      ];
      state.userSelected = initForm; //crea usuario y reinicia el form
      state.openModal = false; //cierra modal si es que esta abierto
    },
    removeUserAction: (state, action) => {
      state.users = state.users.filter((s) => s.id !== action.payload);
    },
    updateUserAction: (state, action) => {
      state.users = state.users.map((s) => {
        if (s.id === action.payload.id) {
          (s.username = action.payload.username),
            (s.email = action.payload.email),
            (s.admin = action.payload.admin),
            (s.password = action.payload.password);
        }
        return s;
      });
      state.userSelected = initForm; //actualiza usuario y reinicia el form
      state.openModal = false;
    },
    loadingUsersAction: (state, action) => {
      state.users = action.payload;
    },
    onOpenModalAction: (state) => {
      state.openModal = true;
    },
    onCloseModalAction: (state) => {
      state.userSelected = initForm;
      state.openModal = false;
      state.errors = {};
    },
    onUpdateAction: (state, action) => {
      state.userSelected = action.payload;
    },
    setErrorsAction: (state, action) => {
      state.errors = action.payload;
    },
  },
});

// para utilizar las actions la exportamos
export const {
  addUserAction,
  removeUserAction,
  updateUserAction,
  loadingUsersAction,
  onOpenModalAction,
  onCloseModalAction,
  onUpdateAction,
  setErrorsAction,
} = usersSlice.actions;
