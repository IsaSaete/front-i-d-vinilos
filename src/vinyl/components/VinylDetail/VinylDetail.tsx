import { Link } from "react-router";
import Button from "../../../ui/components/Button/Button";
import type { Vinyl } from "../../../types";
import useVinyls from "../../hooks/useVinyls";
import "./VinylDetail.css";

interface VinylDetailProps {
  vinyl: Vinyl;
}

const VinylDetail: React.FC<VinylDetailProps> = ({ vinyl }) => {
  const { updateVinylByOwned } = useVinyls();

  const toggleisOwned = () => {
    updateVinylByOwned(vinyl.id);
  };

  const collectionOwner = vinyl.isOwned
    ? "Quitar de mi colección"
    : "Añadir a mi colección";

  const styles = vinyl.styles ? vinyl.styles.join(", ") : "";

  const releaseDate = new Date(vinyl.releaseDate).toLocaleDateString("es-ES");

  const owned = vinyl.isOwned ? "Lo tengo" : "No lo tengo";

  return (
    <>
      <div>
        <h2 className="vinyl-detail__title">{vinyl.title}</h2>
        <h3 className="vinyl__artist">{vinyl.artist}</h3>
      </div>
      <img
        className="vinyl__image"
        src={vinyl.coverImageUrl}
        alt={`Vinilo ${vinyl.title} de ${vinyl.artist}`}
        width={400}
        height={263}
      />

      <ul className="vinyl__info">
        <li className="vinyl__info-item">
          Formato: <span className="vinyl__info-data">{vinyl.format}</span>
        </li>
        <li className="vinyl__info-item">
          Género: <span className="vinyl__info-data">{vinyl.genre}</span>
        </li>
        {styles && (
          <li className="vinyl__info-item">
            Estilo: <span className="vinyl__info-data">{`${styles}`}</span>
          </li>
        )}
        <li className="vinyl__info-item">
          Lanzamiento: <span className="vinyl__info-data">{releaseDate}</span>
        </li>
        <li className="vinyl__info-item">
          País: <span className="vinyl__info-data">{vinyl.country}</span>
        </li>
        {vinyl.purchasedAt && vinyl.isOwned && (
          <li className="vinyl__info-item">
            Comprado en:{" "}
            <span className="vinyl__info-data">{vinyl.purchasedAt}</span>
          </li>
        )}
        <li className="vinyl__info-item">{owned}</li>
      </ul>
      {vinyl.notes && <p className="vinyl__notes">{vinyl.notes}</p>}

      <div className="buttons-container">
        <Button
          action={toggleisOwned}
          classNameModifier="collection"
          aria-label={collectionOwner}
        >
          {collectionOwner}
        </Button>
        <Link
          className="vinyl__modify-info"
          to={`/modificar-vinilo/${vinyl.id}`}
        >
          Modificar info
        </Link>
      </div>
    </>
  );
};

export default VinylDetail;
