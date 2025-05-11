import type { Vinyl } from "../../../types";

interface VinylsListProps {
  vinyls: Vinyl[];
}

const VinylsList: React.FC<VinylsListProps> = ({ vinyls }) => {
  return (
    <ul>
      {vinyls.map((vinyl) => (
        <li key={vinyl.id}></li>
      ))}
    </ul>
  );
};

export default VinylsList;
