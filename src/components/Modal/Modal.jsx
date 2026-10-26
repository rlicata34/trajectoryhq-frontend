import { useEffect } from "react";
import { X } from "lucide-react";
import "./Modal.css";

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal" onMouseDown={onClose}>
      <div
        className="modal__container"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>

          <button
            className="modal__close"
            type="button"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
