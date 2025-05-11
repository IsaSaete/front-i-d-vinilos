import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="main-content">
      <h2 className="main-content__title">Cargando</h2>
      <div className="main-content__loader"></div>
    </div>
  );
};

export default Loader;
