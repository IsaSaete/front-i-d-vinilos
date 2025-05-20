import { Outlet } from "react-router";
import { LazyHeader } from "../../router/components/LazyLoader";
import Modal from "../Modal/Modal";
import "./Layout.css";
import useModal from "../../hooks/useModal";

const Layout: React.FC = () => {
  const {
    modal: { isSuccess, text, isOpen },
    closeModal,
  } = useModal();

  return (
    <div className="main-container">
      <LazyHeader />
      <main className="page-container">
        <Outlet />
      </main>
      {isOpen && (
        <Modal isSuccess={isSuccess} action={closeModal} text={text} />
      )}
    </div>
  );
};

export default Layout;
