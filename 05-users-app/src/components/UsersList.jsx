import React, { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/userContext";
import { AuthContext } from "../auth/context/AuthContext";

export const UsersList = ({ onUpdate }) => {
  const { users = [] } = useContext(UserContext);
  const { login } = useContext(AuthContext);

  return (
    <>
      <h3 className="mt-2">Users table</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>User name</th>
            <th>Email</th>
            <th>Admin role</th>
            {
              login.admin &&
              <th>Actions</th>
            }
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return <UserRow key={u.id} user={u} onUpdate={onUpdate} />;
          })}
        </tbody>
      </table>
    </>
  );
};
