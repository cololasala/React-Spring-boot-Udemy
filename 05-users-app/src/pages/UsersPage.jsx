import { UsersList } from "../components/UsersList";
import { useContext, useState } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UserContext } from "../context/userContext";

export const UsersPage = () => {
  const { users, initForm, setSelectedUser, onUpdate } = useContext(UserContext); // usamos el context y desde alli sacamos lo que necesitamos
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setSelectedUser(initForm);
    setOpenModal(false);
  };

  const onUpdateUser = (user) => {
    onUpdate(user);
    setOpenModal(true);
  };

  return (
    <div className="container my-4">
      <h1>Users app</h1>
      <button className="primary-button" onClick={() => setOpenModal(true)}>
        Add user
      </button>

      {openModal && <UserModalForm onCloseModal={onCloseModal} />}

      {users.length > 0 ? (
        <UsersList onUpdate={onUpdateUser} />
      ) : (
        <div className="alert alert-warning text-center mt-2">
          There are no registered users in the system
        </div>
      )}
    </div>
  );
};
