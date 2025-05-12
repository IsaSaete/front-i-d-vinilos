import type { Vinyl } from "../../../types";

import "./VinylCard.css";

interface VinylCardProps {
  vinyl: Vinyl;
  index: number;
}

const VinylCard: React.FC<VinylCardProps> = ({
  vinyl: { title, coverImageUrl, artist },
  index,
}) => {
  const loadingType = index <= 1 ? "eager" : "lazy";

  return (
    <article className="vinyl">
      <div className="image-container">
        <img
          className="vinyl__image"
          src={coverImageUrl}
          alt={`Vinilo ${title} de ${artist}`}
          width={380}
          height={300}
          loading={loadingType}
        />
      </div>
      <div className="vinyl__info">
        <h2 className="vinyl__title">{title}</h2>
        <h3 className="vinyl__artist">{artist}</h3>
      </div>
    </article>
  );
};

export default VinylCard;
