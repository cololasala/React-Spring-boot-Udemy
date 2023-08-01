import { usersReducerAtions } from "../reducers/usersReducerActions";
import { useContext, useReducer, useState } from "react";
import { usersReducer } from "../reducers/UsersReducer";
import {
  deleteUser,
  findAll,
  saveUser,
  updateUser,
} from "../services/userService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

const initialUsers = [];

const initForm = {
  id: 0,
  username: "",
  email: "",
  password: "",
  admin: false,
};

const initialErrors = {
  username: "",
  email: "",
  password: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [selectedUser, setSelectedUser] = useState(initForm);
  const [errors, setErrors] = useState(initialErrors); //state para manejo de errores
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState();
  const { login, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const getUsers = async () => {
    setLoading(true);
    try {
      const result = await findAll();
      const action = {
        type: usersReducerAtions.LoadingUsers,
        payload: result.data, // axios siempre usa un "data" cuando retorna valores
      };
      dispatch(action);
    } catch (error) {
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        console.warn(error);
      }
    }
    setLoading(false);
  };

  // sirve para agregar y actualizar usuario
  const addUser = async (user) => {
    if (!login.admin) return; //si no es admin se sale, no permito agregar/editar user

    let response;

    try {
      if (user.id === 0) {
        response = await saveUser(user);
      } else {
        const userToModified = { ...user, password: "nothing" }; // envio password ya que si es editar backend valida que se pase desde el front
        response = await updateUser(userToModified.id, userToModified);
      }
      const actionType = user.id === 0
        ? usersReducerAtions.AddUser
        : usersReducerAtions.UpdateUser;
      const action = {
        type: actionType,
        payload: response.data, // axios siempre usa un "data" cuando retorna valores
      };
      dispatch(action);
      onCloseModal(); // cierra modal si venia de modal
      navigate("/users"); // reedirecciona si venia de la pantalla "Register"
      const title = actionType === usersReducerAtions.AddUser
        ? "User added"
        : "User updated";
      const subtitle = actionType === usersReducerAtions.AddUser
        ? "User added successfully"
        : "User updated successfully";
      Swal.fire(title, subtitle, "success");
    } catch (error) {
      if (error.response && error.response.status === 400) { //error bad request, faltan datos o no cumplen longitud por ejemplo
        console.log(error.response.data);
        setErrors(error.response.data);
      } else if (
        error.response && error.response.status === 500 &&
        error.response.data?.message?.includes("Duplicate")
      ) {
        if (error.response.data?.message?.includes("UK_username")) {
          setErrors({ username: "The username already exist" });
        }
        if (error.response.data?.message?.includes("UK_email")) {
          setErrors({ email: "The email already exist" });
        }
      } else if (error.response && error.response.status === 401) {
        Swal.fire({
          title: "Unauthorized access will be redirected to logout",
          confirmButtonText: "OK",
          allowOutsideClick: false,
          icon: "warning",
        }).then(() => {
          handleLogout();
        });
      } else {
        throw error;
      }
    }
  };

  const removeUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Accept",
      reverseButtons: true,
      allowOutsideClick: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUser(user.id);
          const action = {
            type: usersReducerAtions.RemoveUser,
            payload: user.id,
          };
          dispatch(action);
          Swal.fire("Deleted!", "User deleted successfully", "success");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            Swal.fire({
              title: "Unauthorized access will be redirected to logout",
              confirmButtonText: "OK",
              allowOutsideClick: false,
              icon: "warning",
            }).then(() => {
              handleLogout();
            });
          }
        }
      }
    });
  };

  const onCloseModal = () => {
    setSelectedUser(initForm);
    setOpenModal(false);
    setErrors({});
  };

  const onUpdate = (user) => {
    setSelectedUser(user);
  };

  return {
    users,
    initialUsers,
    initForm,
    selectedUser,
    setSelectedUser,
    addUser,
    removeUser,
    onUpdate,
    getUsers,
    errors,
    setErrors,
    openModal,
    setOpenModal,
    onCloseModal,
    loading,
  };
};
