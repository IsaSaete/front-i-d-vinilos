import Button from "../Button/Button";
import "./Modal.css";

interface ModalProps {
  action: () => void;
  isSuccess: boolean;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ action, isSuccess, text }) => {
  const classModal = isSuccess ? "" : "--failure";
  const classCloseButton = isSuccess ? "" : "--failure";

  return (
    <dialog open className="modal">
      <div className={`modal-content modal-content${classModal}`}>
        <Button
          className={`modal__close modal__close${classCloseButton}`}
          action={action}
          aria-label="Cerrar ventana"
        >
          x
        </Button>
        <h2 className="modal__text">{text}</h2>
      </div>
      <button onClick={action} className="modal-background" />
    </dialog>
  );
};

export default Modal;
