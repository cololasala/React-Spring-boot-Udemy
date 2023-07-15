import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";
import { useState } from "react";
import { UserModalForm } from "../components/UserModalForm";

export const UsersPage = () => {
  //hook encargado de manejar los usuarios de la app
  const {
    users,
    initForm,
    selectedUser,
    addUser,
    removeUser,
    onUpdate,
    setSelectedUser,
  } = useUsers();

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

      {openModal && (
        <UserModalForm
          initForm={initForm}
          addUser={addUser}
          selectedUser={selectedUser}
          onCloseModal={onCloseModal}
        />
      )}

      {users.length > 0 ? (
        <UsersList
          users={users}
          onUpdate={onUpdateUser}
          onRemove={removeUser}
        />
      ) : (
        <div className="alert alert-warning text-center mt-2">
          There are no registered users in the system
        </div>
      )}
    </div>
  );
};
