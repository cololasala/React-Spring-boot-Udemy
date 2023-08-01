import { usersReducerAtions } from "./usersReducerActions";

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case usersReducerAtions.AddUser: {
      return [...state, { ...action.payload }];
    }
    case usersReducerAtions.UpdateUser: {
      return state.map((s) => {
        if (s.id === action.payload.id) {
          (s.username = action.payload.username),
            (s.email = action.payload.email),
            (s.admin = action.payload.admin),
            (s.password = action.payload.password);
        }
        return s;
      });
    }
    case usersReducerAtions.RemoveUser: {
      return state.filter((s) => s.id !== action.payload);
    }
    case usersReducerAtions.LoadingUsers: {
      return action.payload;    //cuando se llame por primera vez retornamos lo que pasamos al hacer la llamada a axios
    }
    default:
      return state;
  }
};
