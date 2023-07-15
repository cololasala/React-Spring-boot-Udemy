import React from "react";
import { UserForm } from "./UserForm";

export const UserModalForm = ({initForm, addUser, selectedUser, onCloseModal}) => {
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
                initForm={initForm}
                addUser={addUser}
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
