import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export const UserForm = ({ userUpdate, closeForm }) => {
  const { initForm, addUser, errors, setErrors } = useUsers();
  const [formData, setFormData] = useState(initForm);  //este state es propio de esta pagina por eso no esta en el useUsers()
  const { id, username, email, password, admin } = formData;
  const [checked, setChecked] = useState(admin);  //este state es propio de esta pagina por eso no esta en el useUsers()

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


  return (
    <>
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
          >
            {id !== 0 ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </>
  );
};
