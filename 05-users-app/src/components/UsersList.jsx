import React, { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/userContext";

export const UsersList = ({ onUpdate }) => {
  const { users = [] } = useContext(UserContext);
  return (
    <>
      <h3 className="mt-2">Users table</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>User name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return <UserRow key={u.id} user={u} onUpdate={onUpdate}/>;
          })}
        </tbody>
      </table>
    </>
  );
};
