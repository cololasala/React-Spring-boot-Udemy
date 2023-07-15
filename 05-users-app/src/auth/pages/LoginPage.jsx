import React, { useState } from "react";

const initLoginForm = {
  username: "",
  password: "",
};
export const LoginPage = ({ handleLogin }) => {
  const [loginForm, setLoginForm] = useState(initLoginForm);
  const { username, password } = loginForm;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginForm);
  };

  const disabled = () => {
    return !username || !password;
  };

  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: "block", top: "30%" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login page</h5>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modal-body">
              <input
                type="text"
                name="username"
                className="form-control mb-2"
                placeholder="Username"
                value={username}
                onChange={onInputChange}
              />
              <input
                type="password"
                name="password"
                className="form-control mb-2"
                placeholder="Password"
                value={password}
                onChange={onInputChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="primary-button"
                disabled={disabled()}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
