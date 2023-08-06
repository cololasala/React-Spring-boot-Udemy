import { LoginPage } from "./auth/pages/LoginPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
    const { isAuth } = useSelector(state => state.auth); //del slice "auth", obtenemos el state y sacamos de ahi el isAuth

    return (
        <Routes>
            {isAuth ? (
                <Route path="/*" element={<UserRoutes />} />
            ) : (
                <>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to="/login" />} />
                </>
            )}
        </Routes>
    );
}
