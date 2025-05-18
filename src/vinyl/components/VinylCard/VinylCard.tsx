import Button from "../../../components/Button/Button";
import type { Vinyl } from "../../../types";
import useVinyls from "../../hooks/useVinyls";

import "./VinylCard.css";

interface VinylCardProps {
  vinyl: Vinyl;
  index: number;
}

const VinylCard: React.FC<VinylCardProps> = ({
  vinyl: { title, coverImageUrl, artist, isOwned, id },
  index,
}) => {
  const loadingType = index <= 1 ? "eager" : "lazy";

  const { updateVinylByOwned, deleteVinylById } = useVinyls();

  const toggleisOwned = () => {
    updateVinylByOwned(id);
  };

  const deletedVinyl = () => {
    deleteVinylById(id);
  };

  const collectionOwner = isOwned
    ? "Quitar de mi colección"
    : "Añadir a mi colección";

  return (
    <article className="vinyl">
      <div className="image-container">
        <Button
          classNameModifier="delete"
          action={deletedVinyl}
          aria-label="Eliminar vinilo"
        >
          x
        </Button>
        <img
          className="vinyl__image"
          src={coverImageUrl}
          alt={`Vinilo ${title} de ${artist}`}
          width={400}
          height={263}
          loading={loadingType}
        />

        {isOwned && (
          <img
            className="vinyl__owned-icon"
            src="/vinyl-icon.svg"
            alt="Vinilo en tu colección"
            width={50}
            height={50}
          />
        )}
      </div>
      <div className="vinyl__info">
        <h2 className="vinyl__title">{title}</h2>
        <h3 className="vinyl__artist">{artist}</h3>
      </div>
      <Button
        action={toggleisOwned}
        classNameModifier="collection"
        aria-label={collectionOwner}
      >
        {collectionOwner}
      </Button>
    </article>
  );
};

export default VinylCard;
