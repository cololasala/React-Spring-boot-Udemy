import { NavLink } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useSelector } from "react-redux";

export const UserRow = ({ user, onUpdate }) => {
  const { removeUser } = useUsers();
  const { admin } = useSelector(state => state.auth)

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{String(user.admin)}</td>
      {
        admin &&
        <td>
          <button className="btn btn-success me-2" onClick={() => onUpdate(user)}>Update</button>
          <button className="btn btn-danger me-2" onClick={() => removeUser(user)}>Remove</button>
          <NavLink className="btn btn-secondary" to={"/users/edit/" + user.id}>Update route</NavLink> {/* Actualizar desde ruta */}
        </td>
      }
    </tr>
  );
};
