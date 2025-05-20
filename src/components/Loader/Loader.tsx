import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="main-content">
      <h2 className="main-content__title">Cargando</h2>

      <img
        className="loader loader"
        src="/vinyl-icon.svg"
        alt="Vinilo girando"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
