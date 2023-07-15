import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/Navbar";

export const UserRoutes = ({login, handleLogout}) => {
  return (
    <>
      <Navbar login={login} handleLogout={handleLogout} />
      <Routes>
        <Route path="users" element={<UsersPage />} />
        <Route path="/*" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};
