import Swal from "sweetalert2";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLoginLoading, onLogout } from "../../store/slices/auth/authSlice";

export const useAuth = () => {
  const { user, admin, isAuth } = useSelector(state => state.auth); //obtenemos del state del slice "auth"
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    try {
      dispatch(onLoginLoading(true)); //login spinner en true
      const response = await authService(user);

      const token = response.data.token;
      const claims = JSON.parse(atob(response.data.token.split(".")[1]));
      const userClaims = { username: claims.username };
      dispatch(onLogin({ user: userClaims, admin: claims.admin === "true" }));
      sessionStorage.setItem("logged", JSON.stringify({ isAuth: true, user: userClaims, admin: claims.admin === "true" }));
      sessionStorage.setItem("token", `Bearer ${token}`); //guardo token en sessionStorage
      navigate("/users");   //si todo sale bien navegamos a la ruta users
    } catch (error) {
      if (error.response?.status === 401) {
        Swal.fire("Error", "User or password incorrect", "error");
      } else if (error.response?.status === 403) {
        Swal.fire("Error", "Do not have access", "error");
      } else {
        throw error;
      }
      dispatch(onLoginLoading(false)); //login spinner en false si es que falla el login
    }
  };

  const handleLogout = () => {
    dispatch(onLogout());
    sessionStorage.clear();
  };

  return {
    login: {
      user,
      admin,
      isAuth
    },
    handleLogin,
    handleLogout
  };
};
