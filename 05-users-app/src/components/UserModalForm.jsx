import React, { useContext } from "react";
import { UserForm } from "./UserForm";
import { UserContext } from "../context/userContext";

export const UserModalForm = ({ onCloseModal }) => {
  const { selectedUser } = useContext(UserContext);
  return (
    <div className="abrir-modal animacion fadeIn">
      <div
        className="modal"
        style={{ display: "block", top: "30%" }}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {selectedUser.id > 0 ? "Update" : "Create"} user
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <UserForm
                userUpdate={selectedUser}
                closeForm={onCloseModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
