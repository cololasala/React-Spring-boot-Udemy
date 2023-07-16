import { UserContext } from "./userContext";
import { useUsers } from "../hooks/useUsers";

export const UserProvider = ({ children }) => { //en el provider decimos que tendremos todos los componentes hijos
  const {
    users,
    initForm,
    selectedUser,
    addUser,
    removeUser,
    onUpdate,
    setSelectedUser,
  } = useUsers(); //hook encargado de manejar los usuarios de la app

  return (
    <UserContext.Provider
      value={{          // el value es el storage de nuestro provider, todos los children podran acceder a esto
        users,
        initForm,
        selectedUser,
        addUser,
        removeUser,
        onUpdate,
        setSelectedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
