import { useNavigate, useParams } from "react-router-dom";
import { UserForm } from "../components/UserForm";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

export const RegisterPage = () => {
  const { users = [], initForm, setErrors } = useContext(UserContext); // usamos el context y desde alli sacamos lo que necesitamos 
  const [selectedUser, setSelectedUser] = useState(initForm);
  const navigate = useNavigate();

  const goToUsers = () => {
    setErrors({});
    navigate("users");
  };

  const { id } = useParams(); // hook para obtener parameters de routes

  useEffect(() => {
    if (id) {
      const userToUpdate = users.find((u) => u.id == id) || initForm;
      setSelectedUser(userToUpdate);
    }
  }, [id]);

  return (
    <div className="container my-4">
      <h3>{selectedUser.id > 0 ? "Edit user" : "Create user"}</h3>
      <div className="row">
        <div className="col">
          <UserForm
            userUpdate={selectedUser}
            closeForm={goToUsers}
          />
        </div>
      </div>
    </div>
  );
};
