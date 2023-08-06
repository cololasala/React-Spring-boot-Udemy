import { UsersList } from "../components/UsersList";
import { UserModalForm } from "../components/UserModalForm";
import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UsersPage = () => {
  const {
    users,
    getUsers,
    onUpdate,
    openModal,
    onOpenModal,
    onCloseModal,
  } = useUsers();
  const { login } = useAuth();

  useEffect(() => {
    getUsers();
  }, []);

  const onUpdateUser = (user) => {
    onUpdate(user);
    onOpenModal();
  };

  return (
    <div className="container my-4">
      <h1>Users app</h1>
      {
        login.admin &&
        <button className="primary-button" onClick={() => onOpenModal()}>
          Add user
        </button>
      }

      {openModal && <UserModalForm onCloseModal={onCloseModal} />}

      {/* {loading ? (
        <div>Loading...</div>
      ) : users.length > 0 ? (
        
      ) : (
        <div className="alert alert-warning text-center mt-2">
          There are no registered users in the system
        </div>
      )} */}
      {
         users.length > 0 && <UsersList onUpdate={onUpdateUser} />
      }
    </div>
  );
};
