import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import { loginReducerActions } from "../reducers/loginReducerActions";
import Swal from "sweetalert2";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initLogin = JSON.parse(sessionStorage.getItem("logged")) || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initLogin);
  const navigate = useNavigate();

  const handleLogin = (user) => {
    if (authService(user)) {
      const action = {
        type: loginReducerActions.Login,
        payload: user,
      };
      dispatch(action);
      sessionStorage.setItem("logged", JSON.stringify({ isAuth: true, user }));
      navigate("/users");   // navegamos a la ruta users
    } else {
      Swal.fire("Error", "User or password incorrect", "error");
    }
  };

  const handleLogout = () => {
    const action = {
      type: loginReducerActions.Logout,
    };
    dispatch(action);
    sessionStorage.clear();
  };

  return {
    login,
    handleLogin,
    handleLogout
  };
};
