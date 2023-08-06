import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  findAll,
  saveUser,
  updateUser,
} from "../services/userService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  addUserAction,
  initForm,
  loadingUsersAction,
  onCloseModalAction,
  onOpenModalAction,
  onUpdateAction,
  removeUserAction,
  setErrorsAction,
  updateUserAction,
} from "../store/slices/users/usersSlice";

const initialUsers = [];

export const useUsers = () => {
  const dispatch = useDispatch(); //utilizamos el dispath de react-redux
  const { users, selectedUser, openModal, errors } = useSelector(
    (state) => state.users,
  ); // obtenemos la data con useSelector
  const { admin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const result = await findAll();
      dispatch(loadingUsersAction(result.data)); //con dispatch llamamos a la action loadingUsers y le pasamos como payload la data de axios
    } catch (error) {
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        console.warn(error);
      }
    }
  };

  // sirve para agregar y actualizar usuario
  const addUser = async (user) => {
    if (!admin) return; //si no es admin se sale, no permito agregar/editar user

    let response;

    try {
      if (user.id === 0) {
        response = await saveUser(user);
        dispatch(addUserAction(response.data));
      } else {
        const userToModified = { ...user, password: "nothing" }; // envio password ya que si es editar backend valida que se pase desde el front
        response = await updateUser(userToModified.id, userToModified);
        dispatch(updateUserAction(response.data));
      }

      onCloseModal(); // cierra modal si venia de modal
      navigate("/users"); // reedirecciona si venia de la pantalla "Register"
      const title = user.id === 0 ? "User added" : "User updated";
      const subtitle = user.id === 0
        ? "User added successfully"
        : "User updated successfully";
      Swal.fire(title, subtitle, "success");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        //error bad request, faltan datos o no cumplen longitud por ejemplo
        setErrors(error.response.data);
      } else if (
        error.response &&
        error.response.status === 500 &&
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
          dispatch(removeUserAction(user.id));
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

  const onOpenModal = () => {
    dispatch(onOpenModalAction());
  };

  const onCloseModal = () => {
    dispatch(onCloseModalAction());
  };

  const onUpdate = (user) => {
    dispatch(onUpdateAction(user));
  };

  const setErrors = (errors) => {
    dispatch(setErrorsAction(errors));
  };

  return {
    users,
    initialUsers,
    initForm,
    selectedUser,
    addUser,
    removeUser,
    onUpdate,
    getUsers,
    errors,
    openModal,
    onOpenModal,
    onCloseModal,
    setErrors,
  };
};
