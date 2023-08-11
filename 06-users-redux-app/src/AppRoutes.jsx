import { LoginPage } from "./auth/pages/LoginPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
    const { isAuth, isLoginLoading } = useSelector(state => state.auth); //del slice "auth", obtenemos el state y sacamos de ahi el isAuth

    if (isLoginLoading) {
        return <div className="d-flex justify-content-center spinner-container align-items-center">
            <div className="spinner-border text-info" role="status" style={{ width: "2.5rem", height: "2.5rem" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

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
