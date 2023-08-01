import { UsersList } from "../components/UsersList";
import { useContext } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UserContext } from "../context/userContext";
import { useEffect } from "react";
import { AuthContext } from "../auth/context/AuthContext";

export const UsersPage = () => {
  const {
    users,
    onUpdate,
    getUsers,
    openModal,
    setOpenModal,
    onCloseModal,
    loading,
  } = useContext(UserContext); // usamos el context y desde alli sacamos lo que necesitamos
  const { login } = useContext(AuthContext);

  useEffect(() => {
    getUsers();
  }, []);

  const onUpdateUser = (user) => {
    onUpdate(user);
    setOpenModal(true);
  };

  return (
    <div className="container my-4">
      <h1>Users app</h1>
      {
        login.admin &&
        <button className="primary-button" onClick={() => setOpenModal(true)}>
          Add user
        </button>
      }

      {openModal && <UserModalForm onCloseModal={onCloseModal} />}

      {loading ? (
        <div>Loading...</div>
      ) : users.length > 0 ? (
        <UsersList onUpdate={onUpdateUser} />
      ) : (
        <div className="alert alert-warning text-center mt-2">
          There are no registered users in the system
        </div>
      )}
    </div>
  );
};
