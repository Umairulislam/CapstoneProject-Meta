// Modal.jsx
import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md max-w-md">
        {children}
        <button className="mt-4 px-4 py-2 bg-primary2 rounded-md" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
