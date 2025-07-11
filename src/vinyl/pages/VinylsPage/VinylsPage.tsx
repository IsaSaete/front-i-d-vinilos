import { useSearchParams } from "react-router";
import { useEffect } from "react";
import useVinyls from "../../hooks/useVinyls";
import Loader from "../../../ui/components/Loader/Loader";
import VinylsList from "../../components/VinylsList/VinylsList";
import Pagination from "../../../ui/components/Pagination/Pagination";
import useLoading from "../../../ui/hooks/useLoading";
import "./VinylsPage.css";

const VinylsPage: React.FC = () => {
  const { vinylCollection, loadVinylsByPage } = useVinyls();
  const {
    loadingState: { isLoading },
  } = useLoading();

  const [searchParams] = useSearchParams();

  const pageNumber = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    loadVinylsByPage(pageNumber);
  }, [pageNumber, loadVinylsByPage]);

  if (isLoading) {
    return <Loader />;
  }

  const { vinyls, vinylsTotal } = vinylCollection;
  const vinylsByPage = vinyls.length;

  return (
    <>
      <header className="vinyls-page__header">
        <h1 className="vinyls-page__title">Vinilos</h1>
        <span className="vinyls-page__counter ">
          {vinylsByPage}/{vinylsTotal}
        </span>
      </header>
      <VinylsList vinyls={vinyls} />
      <Pagination vinylsTotal={vinylsTotal} currentPage={pageNumber} />
    </>
  );
};

export default VinylsPage;
