import { usersReducerAtions } from "./usersReducerActions";

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case usersReducerAtions.AddUser: {
      return [...state, { ...action.payload, id: new Date().getTime() }];
    }
    case usersReducerAtions.UpdateUser: {
      return state.map((s) => {
        if (s.id === action.payload.id) {
          (s.userName = action.payload.userName),
            (s.email = action.payload.email),
            (s.password = action.payload.password);
        }
        return s;
      });
    }
    case usersReducerAtions.RemoveUser: {
      return state.filter((s) => s.id !== action.payload);
    }
    default:
      return state;
  }
};
