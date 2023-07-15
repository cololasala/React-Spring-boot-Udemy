import { loginReducerActions } from "./loginReducerActions";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case loginReducerActions.Login: {
      return {
        isAuth: true,
        user: action.payload,
      };
    }
    case loginReducerActions.Logout: {
      return {
        isAuth: false,
      };
    }

    default:
      return state;
  }
};
