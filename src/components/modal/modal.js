"use client";
const Modal = ({ modalOpen, setModalOpen, children }) => {
       const handleClose = () => {
         setModalOpen(false);
       };
  return (
    <div>
    

      <dialog
        id="my_modal_7"
        className={`modal  ${modalOpen ? "modal-open" : ""}`}
      >
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={handleClose}
              htmlFor="my_modal_7"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
   
    </div>
  );
};

export default Modal;