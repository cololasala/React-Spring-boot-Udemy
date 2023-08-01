import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import { loginReducerActions } from "../reducers/loginReducerActions";
import Swal from "sweetalert2";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initLogin = JSON.parse(sessionStorage.getItem("logged")) || {
  isAuth: false,
  admin: false,
  user: undefined,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initLogin);
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    try {
      const response = await authService(user);
      
      const token = response.data.token;
      const claims = JSON.parse(atob(response.data.token.split(".")[1]));
      const userClaims = { username: claims.username };
      const action = {
        type: loginReducerActions.Login,
        payload: {user: userClaims, admin: claims.admin === "true"},
      };
      dispatch(action);
      sessionStorage.setItem("logged", JSON.stringify({ isAuth: true, user: userClaims, admin: claims.admin === "true" }));
      sessionStorage.setItem("token", `Bearer ${token}`); //guardo token en sessionStorage
      navigate("/users");   //si todo sale bien navegamos a la ruta users
    } catch (error) {
      if(error.response?.status === 401) {
        Swal.fire("Error", "User or password incorrect", "error");
      } else if (error.response?.status === 403) {
        Swal.fire("Error", "Do not have access", "error");
      } else {
        throw error;
      }
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
