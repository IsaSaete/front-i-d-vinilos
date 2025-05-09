import "./NotFoundPage.css";

const NotFoundPAge: React.FC = () => {
  return (
    <div className="main-content">
      <h1 className="page-title">Página no encontrada</h1>
      <img
        className="loader"
        src="/page-not-found.svg"
        alt="Página no encontrada"
        width={310}
        height={110}
      />
    </div>
  );
};

export default NotFoundPAge;
