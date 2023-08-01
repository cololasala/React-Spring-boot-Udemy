import { loginReducerActions } from "./loginReducerActions";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case loginReducerActions.Login: {
      return {
        isAuth: true,
        admin: action.payload.admin,
        user: action.payload.user,
      };
    }
    case loginReducerActions.Logout: {
      return {
        isAuth: false,
        admin: false,
        user: undefined,
      };
    }

    default:
      return state;
  }
};
