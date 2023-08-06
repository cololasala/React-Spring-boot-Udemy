import { Routes, Route, Navigate } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useSelector } from "react-redux";

export const UserRoutes = () => {
  const { admin } = useSelector(state => state.auth);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="users"
          element={
            <UsersPage />
          }
        />
        {
          admin &&
          <>
            <Route
              path="users/register"
              element={<RegisterPage />}
            />
            <Route
              path="users/edit/:id"
              element={
                <RegisterPage />
              }
            />
          </>
        }
        <Route path="/*" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};
