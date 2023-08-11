import { UsersList } from "../components/UsersList";
import { UserModalForm } from "../components/UserModalForm";
import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";
import { useParams } from "react-router-dom";
import { Paginator } from "../components/Paginator";
import { useSelector } from "react-redux";

export const UsersPage = () => {
  const {
    users,
    getUsers,
    onUpdate,
    openModal,
    onOpenModal,
    onCloseModal,
    isLoading
  } = useUsers();
  const { login } = useAuth();
  const { page } = useParams(); // obtenemos pagina de la ruta
  const { paginator } = useSelector(state => state.users);

  useEffect(() => { // se ejecuta cada vez que cambie la page
    getUsers(page);
  }, [page]);

  const onUpdateUser = (user) => {
    onUpdate(user);
    onOpenModal();
  };

  if (isLoading) {
    return <div className="d-flex justify-content-center spinner-container align-items-center">
      <div className="spinner-border text-info" role="status" style={{ width: "2.5rem", height: "2.5rem" }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }

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

      {!isLoading &&
        <>
          {paginator.totalElements > 0 && paginator.number <= (paginator.totalPages - 1) && /* si tengo elementos y en la url tengo una pagina dentro del rango */
            <>
              <UsersList onUpdate={onUpdateUser} />
              <Paginator url={"/users"} paginator={paginator}/>
            </>
          }

          {paginator.totalElements === 0 &&
            <div className="alert alert-warning text-center mt-2">
              There are no registered users in the system
            </div>
          }

          {
            paginator.number > (paginator.totalPages - 1) &&  /* si la pagina de la url esta fuera del rango */
            <div className="alert alert-danger text-center mt-2">
              Page Not found
            </div>  
          }
        </>
      }
    </div>
  );
};
