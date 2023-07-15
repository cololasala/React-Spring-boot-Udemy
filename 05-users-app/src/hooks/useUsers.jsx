import { usersReducerAtions } from "../reducers/usersReducerActions";
import { useState, useReducer } from "react";
import { usersReducer } from "../reducers/UsersReducer";
import Swal from "sweetalert2";

const initialUsers = [
  { id: 1, userName: "pepe", email: "pepe@gmail.com", password: "1234" },
];

const initForm = {
  id: 0,
  userName: "",
  email: "",
  password: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [selectedUser, setSelectedUser] = useState(initForm);

  // sirve para agregar y actualizar usuario
  const addUser = (user) => {
    const actionType =
      user.id === 0
        ? usersReducerAtions.AddUser
        : usersReducerAtions.UpdateUser;
    const action = {
      type: actionType,
      payload: user,
    };
    dispatch(action);
    setSelectedUser(initForm);

    const title =
      actionType === usersReducerAtions.AddUser ? "User added" : "User updated";
    const subtitle =
      actionType === usersReducerAtions.AddUser
        ? "User added successfully"
        : "User updated successfully";
    Swal.fire(title, subtitle, "success");
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
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        const action = {
          type: usersReducerAtions.RemoveUser,
          payload: user.id,
        };
        dispatch(action);
        Swal.fire("Deleted!", "User deleted successfully", "success");
      }
    });
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
  };
};
