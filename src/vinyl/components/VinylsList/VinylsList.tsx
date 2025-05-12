import type { Vinyl } from "../../../types";
import VinylCard from "../VinylCard/VinylCard";
import "./VinylsList.css";

interface VinylsListProps {
  vinyls: Vinyl[];
}

const VinylsList: React.FC<VinylsListProps> = ({ vinyls }) => {
  return (
    <ul className="vinyls">
      {vinyls.map((vinyl, index) => (
        <li key={vinyl.id}>
          <VinylCard vinyl={vinyl} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default VinylsList;
