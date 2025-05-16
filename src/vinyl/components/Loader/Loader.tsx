import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="main-content">
      <h2 className="main-content__title">Cargando</h2>

      <div className="main-content__loader">
        <img
          src="/vinilo-coleccion.svg"
          alt="Vinilo girando"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Loader;
