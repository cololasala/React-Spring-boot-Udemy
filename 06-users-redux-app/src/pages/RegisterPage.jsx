import { useNavigate, useParams } from "react-router-dom";
import { UserForm } from "../components/UserForm";
import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export const RegisterPage = () => {
  const { users, initForm, setErrors } = useUsers();
  const [selectedUser, setSelectedUser] = useState(initForm);
  const navigate = useNavigate();

  const goToUsers = () => {
    setErrors({});
    navigate("users");
  };

  const { id } = useParams();

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
