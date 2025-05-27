import { useParams } from "react-router";
import { useEffect } from "react";
import VinylForm from "../../components/VinylForm/VinylForm";
import useVinyls from "../../hooks/useVinyls";
import type { VinylFormData } from "../../../types";
import { useAppSelector } from "../../../store/hooks";

const UpdateVinylPage: React.FC = () => {
  const { id: vinylId } = useParams<{ id: string }>();

  const { getVinylById, updateVinyl } = useVinyls();

  const vinyl = useAppSelector((state) =>
    state.vinylsInfo.vinylCollection.vinyls.find(
      (vinyl) => vinyl.id === vinylId,
    ),
  );

  useEffect(() => {
    window.scroll({ top: 0, behavior: "instant" });

    getVinylById(vinylId!);
  }, [vinylId, getVinylById]);

  if (vinyl) {
    const releaseDate = new Date(vinyl.releaseDate).toISOString().split("T")[0];
    const styles = vinyl.styles ? vinyl.styles.join(", ") : "";

    const initialVinylData: VinylFormData = {
      title: vinyl.title,
      artist: vinyl.artist,
      country: vinyl.country,
      releaseDate: releaseDate,
      genre: vinyl.genre,
      format: vinyl.format,
      coverImageUrl: vinyl.coverImageUrl,
      styles: styles,
      notes: vinyl.notes,
      purchasedAt: vinyl.purchasedAt,
      isOwned: vinyl.isOwned,
    };

    return (
      <>
        <h1 className="page-title">Modifica el vinilo</h1>
        <div className="content">
          <VinylForm
            initialVinylData={initialVinylData}
            exists={true}
            vinylId={vinylId}
            updateVinyl={updateVinyl}
          />
        </div>
      </>
    );
  }
};

export default UpdateVinylPage;
