import { useEffect } from "react";
import type { VinylFormData } from "../../../types";
import VinylForm from "../../components/VinylForm/VinylForm";
import useVinyls from "../../hooks/useVinyls";

const AddVinylPage: React.FC = () => {
  const { addNewVinyl } = useVinyls();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

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
      <h1 className="page-title">Añade un vinilo</h1>
      <div className="content">
        <VinylForm
          initialVinylData={initialVinylData}
          exists={false}
          addVinyl={addNewVinyl}
        />
      </div>
    </>
  );
};

export default AddVinylPage;
