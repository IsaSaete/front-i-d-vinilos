import { Outlet } from "react-router";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
import useModal from "../../hooks/useModal";

const Layout: React.FC = () => {
  const {
    modal: { isSuccess, text, isOpen },
    closeModal,
  } = useModal();

  return (
    <div className="main-container">
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
      {isOpen && (
        <Modal isSuccess={isSuccess} action={closeModal} text={text} />
      )}
    </div>
  );
};

export default Layout;
