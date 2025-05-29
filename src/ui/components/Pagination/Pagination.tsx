import { Link } from "react-router";
import "./Pagination.css";

interface PaginationProps {
  vinylsTotal: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  vinylsTotal,
  currentPage,
}) => {
  const vinylsByPage = 6;
  const pagesTotal = Math.ceil(vinylsTotal / vinylsByPage);
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const firstPageClass = currentPage > 1 ? "" : " paginator__link--hidden";
  const lastPageClass =
    currentPage < pagesTotal ? "" : " paginator__link--hidden";

  return (
    <nav className="paginator">
      <Link
        aria-label="Ir a la página anterior"
        className={`paginator__link ${firstPageClass}`}
        to={`/vinilos?page=${previousPage}`}
      >
        <img
          src="/previous.svg"
          alt=""
          width={36}
          height={27}
          aria-hidden="true"
        />
      </Link>
      <span className="paginator__current-page">{currentPage}</span>
      <Link
        aria-label="Ir a la página siguiente"
        className={`paginator__link ${lastPageClass}`}
        to={`/vinilos?page=${nextPage}`}
      >
        <img src="/next.svg" alt="" width={36} height={27} aria-hidden="true" />
      </Link>
    </nav>
  );
};

export default Pagination;
