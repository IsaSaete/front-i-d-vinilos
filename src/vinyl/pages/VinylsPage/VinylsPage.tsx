import { useSearchParams } from "react-router";
import { useEffect } from "react";
import useVinyls from "../../hooks/useVinyls";
import Loader from "../../componentes/Loader/Loader";
import "./VinylsPage.css";

const VinylsPage: React.FC = () => {
  const { vinylCollection, loadVinylsByPage } = useVinyls();
  const [searchParams] = useSearchParams();

  const pageNumber = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  useEffect(() => {
    loadVinylsByPage(pageNumber);
  }, [pageNumber, loadVinylsByPage]);

  const vinylsTotal = vinylCollection.vinylsTotal;
  const VinylsByPage = vinylCollection.vinyls.length;

  if (vinylCollection.vinylsTotal === 0) {
    return <Loader />;
  }

  return (
    <>
      <header className="header-content">
        <h1 className="page-title">Vinilos</h1>
        <span className="page-counter">
          {VinylsByPage}/{vinylsTotal}
        </span>
      </header>
    </>
  );
};

export default VinylsPage;
