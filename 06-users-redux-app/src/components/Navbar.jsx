import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../auth/hooks/useAuth";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { handleLogout } = useAuth();
  const { user, admin } = useSelector(state => state.auth);

  const onLogout = () => {
    Swal.fire({
      title: "Do you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Accept",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
      }
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h4>User {user.username}</h4>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/users"}>
                  Users
                </NavLink>
              </li>
              {
                admin &&
                <li className="nav-item">
                  <NavLink className="nav-link" to={"users/register"}>
                    Register user
                  </NavLink>
                </li>
              }
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-end me-1">
          <button className="btn btn-outline-primary me-1">Admin</button>
          <button className="btn btn-outline-secondary" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};
