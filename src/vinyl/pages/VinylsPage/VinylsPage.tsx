import { useSearchParams } from "react-router";
import { useEffect } from "react";
import useVinyls from "../../hooks/useVinyls";
import Loader from "../../components/Loader/Loader";
import "./VinylsPage.css";
import VinylsList from "../../components/VinylsList/VinylsList";
import Pagination from "../../../components/Pagination/Pagination";

const VinylsPage: React.FC = () => {
  const { vinylCollection, loadVinylsByPage } = useVinyls();
  const [searchParams] = useSearchParams();

  const pageNumber = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  useEffect(() => {
    window.scrollTo({ top: 0 });

    loadVinylsByPage(pageNumber);
  }, [pageNumber, loadVinylsByPage]);

  const vinylsTotal = vinylCollection.vinylsTotal;
  const VinylsByPage = vinylCollection.vinyls.length;

  if (vinylCollection.vinylsTotal === 0) {
    return <Loader />;
  }

  const vinyls = vinylCollection.vinyls;

  return (
    <>
      <header className="header-content">
        <h1 className="page-title">Vinilos</h1>
        <span className="page-counter">
          {VinylsByPage}/{vinylsTotal}
        </span>
      </header>
      <VinylsList vinyls={vinyls} />
      <Pagination vinylsTotal={vinylsTotal} currentPage={pageNumber} />
    </>
  );
};

export default VinylsPage;
