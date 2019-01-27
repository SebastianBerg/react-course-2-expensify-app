import React from "react";
import ReactModal from "react-modal";

const OptionModal = props => (
  <ReactModal
    isOpen={!!props.isOpen}
    ariaHideApp={false}
    onRequestClose={props.handleCloseModal}
    style={{
      content: {
        border: "2px solid #eb560a",
        borderRadius: "4px",
        bottom: "auto",
        minHeight: "10rem",
        left: "50%",
        padding: "2rem",
        position: "fixed",
        right: "auto",
        top: "50%",
        transform: "translate(-50%,-50%)",
        minWidth: "20rem",
        width: "80%",
        maxWidth: "60rem"
      }
    }}
  >
    <div className="modal-box">
      <h1 className="modal-title">
        Are you sure you want to remove this {props.removalObject}?
      </h1>
      <div className="modal-buttonbox">
        <button onClick={props.onRemove} className="button">
          Yes, I'm sure.
        </button>
        <button onClick={props.handleCloseModal} className="button--light-grey">
          No, I want to keep the {props.removalObject}.
        </button>
      </div>
    </div>
  </ReactModal>
);

export default OptionModal;
