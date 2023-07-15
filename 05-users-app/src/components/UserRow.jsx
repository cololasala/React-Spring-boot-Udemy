import React from "react";

export const UserRow = ({user, onUpdate, onRemove}) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-success me-2" onClick={onUpdate}>Update</button>
        <button className="btn btn-danger" onClick={onRemove}>Remove</button>
      </td>
    </tr>
  );
};
