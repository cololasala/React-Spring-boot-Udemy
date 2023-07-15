import { LoginPage } from "./auth/pages/LoginPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./auth/hooks/useAuth";
import { UserRoutes } from "./components/UserRoutes";

export const UsersApp = () => {
  //hook encargado de manejar el auth
  const { login, handleLogin, handleLogout } = useAuth();

  return (
    <Routes>
      {login.isAuth ? (
        <Route
          path="/*"
          element={<UserRoutes login={login} handleLogout={handleLogout} />}
        />
      ) : (
        <>
          <Route
            path="login"
            element={<LoginPage handleLogin={handleLogin} />}
          />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};
