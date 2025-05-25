import type { VinylFormData } from "../../../types";
import VinylForm from "../../components/VinylForm/VinylForm";
import useVinyls from "../../hooks/useVinyls";
import "./AddVinylPage.css";

const AddVinylPage: React.FC = () => {
  const { addNewVinyl } = useVinyls();

  const initialVinylData: VinylFormData = {
    title: "",
    artist: "",
    country: "",
    releaseDate: "",
    genre: "",
    format: "",
    coverImageUrl: "",
    styles: "",
    purchasedAt: "",
    notes: "",
    isOwned: false,
  };

  return (
    <>
      <h1 className="page-addtitle">Añade un vinilo</h1>
      <VinylForm
        initialVinylData={initialVinylData}
        exists={false}
        addVinyl={addNewVinyl}
      />
    </>
  );
};

export default AddVinylPage;
