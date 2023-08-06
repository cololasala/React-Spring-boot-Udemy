import { UserForm } from "./UserForm";
import { useSelector } from "react-redux";

export const UserModalForm = ({ onCloseModal }) => {
  const { userSelected } = useSelector(state => state.users);
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
                {userSelected.id > 0 ? "Update" : "Create"} user
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
                userUpdate={userSelected}
                closeForm={onCloseModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
