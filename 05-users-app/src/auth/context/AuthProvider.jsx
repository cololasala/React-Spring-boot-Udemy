import { AuthContext } from "./AuthContext";
import { useAuth } from "../hooks/useAuth";

export const AuthProvider = ({ children }) => {
  //hook encargado de manejar el auth
  const { login, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        login,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
