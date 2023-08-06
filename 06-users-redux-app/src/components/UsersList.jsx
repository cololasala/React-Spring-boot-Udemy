import { UserRow } from "./UserRow";
import { useUsers } from "../hooks/useUsers";
import { useSelector } from "react-redux";

export const UsersList = ({ onUpdate }) => {
  const { users } = useUsers();
  const { admin } = useSelector(state => state.auth)

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
              admin &&
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
