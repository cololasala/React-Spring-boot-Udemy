import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

export const UserForm = ({ userUpdate, closeForm }) => {
  const { initForm, addUser, errors, setErrors } = useContext(UserContext); // usamos el context y desde alli sacamos lo que necesitamos
  const [formData, setFormData] = useState(initForm);
  const { id, username, email, password, admin } = formData;
  const [checked, setChecked] = useState(admin);

  useEffect(() => {
    setErrors({}); //al iniciar saco los errors del form
    setFormData(userUpdate);
  }, [userUpdate]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldValue) => ({ ...oldValue, [name]: value }));
  };

  const onCheckedChange = (e) => {
    const { checked, name } = e.target;
    setChecked(checked);
    setFormData((oldValue) => ({ ...oldValue, [name]: checked }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
  };

  /* const isDisabled = () => {
    return !username || !email || (id === 0 && !password);
  }; */

  return (
    <>
      {/* se quita required de inputs y isDisabled para mostrar errores de back */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control mb-1"
          name="username"
          value={username || ""}
          onChange={onInputChange}
          placeholder="username"
        />
        <small className="text-danger">{errors?.username}</small>
        <input
          type="email"
          className="form-control mb-1"
          name="email"
          value={email || ""}
          onChange={onInputChange}
          placeholder="Email"
        />
        <div className="my-3 form-check">
          <label className="form-check-label">Admin</label>
          <input
            type="checkbox"
            className="form-check-input"
            id="admin"
            name="admin"
            checked={admin}
            onChange={onCheckedChange}
          />
        </div>
        <small className="text-danger">{errors?.email}</small>
        {id === 0 && (
          <>
            <input
              type="password"
              className="form-control mb-1"
              name="password"
              value={password || ""}
              onChange={onInputChange}
              placeholder="Password"
            />
            <small className="text-danger">{errors?.password}</small>
          </>
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
          /* style={{ opacity: isDisabled() ? 0.65 : 1 }}
      disabled={isDisabled()} */
          >
            {id !== 0 ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </>
  );
};
