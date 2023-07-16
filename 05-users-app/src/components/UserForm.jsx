import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

export const UserForm = ({ userUpdate, closeForm }) => {
  const { initForm, addUser } = useContext(UserContext); // usamos el context y desde alli sacamos lo que necesitamos 
  const [formData, setFormData] = useState(initForm);
  const { id, userName, email, password } = formData;

  useEffect(() => {
    setFormData(userUpdate);
  }, [userUpdate]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldValue) => ({ ...oldValue, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData(initForm);
    closeForm();
  };

  const isDisabled = () => {
    return !userName || !email || (id === 0 && !password);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control mb-1"
          name="userName"
          value={userName || ""}
          onChange={onInputChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          className="form-control mb-1"
          name="email"
          value={email || ""}
          onChange={onInputChange}
          placeholder="Email"
          required
        />
        {id === 0 && (
          <input
            type="password"
            className="form-control mb-1"
            name="password"
            value={password || ""}
            onChange={onInputChange}
            placeholder="Password"
            required
          />
        )}
        {/* type hidden para no actualizar id */}
        <input type="hidden" name="id" value={id || ""} />
        <div className="mt-2" align="end">
          <button
            type="button"
            className="primary-button me-2"
            onClick={closeForm}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="primary-button"
            style={{ opacity: isDisabled() ? 0.65 : 1 }}
            disabled={isDisabled()}
          >
            {id !== 0 ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </>
  );
};
