import "./NotFoundPage.css";

const NotFoundPAge: React.FC = () => {
  return (
    <div className="main-content">
      <h1 className="page-title">Página no encontrada</h1>
      <img
        className="loader"
        src="/page-not-found.svg"
        alt="Error 404. El 0 está representado con un vinilo"
        width={310}
        height={110}
      />
    </div>
  );
};

export default NotFoundPAge;
