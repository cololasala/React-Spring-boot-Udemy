import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const UserRow = ({ user, onUpdate }) => {
  const {removeUser} = useContext(UserContext);
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-success me-2" onClick={() => onUpdate(user)}>Update</button>
        <button className="btn btn-danger me-2" onClick={() => removeUser(user)}>Remove</button>
        <NavLink className="btn btn-secondary" to={"/users/edit/" + user.id}>Update route</NavLink> {/* Actualizar desde ruta */}
      </td>
    </tr>
  );
};
