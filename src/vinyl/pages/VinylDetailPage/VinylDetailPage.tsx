import { useParams } from "react-router";
import { useEffect } from "react";
import useVinyls from "../../hooks/useVinyls";
import { useAppSelector } from "../../../store/hooks";
import Loader from "../../../ui/components/Loader/Loader";
import VinylDetail from "../../components/VinylDetail/VinylDetail";
import useLoading from "../../../ui/hooks/useLoading";

const VinylDetailPage: React.FC = () => {
  const { getVinylById } = useVinyls();
  const {
    loadingState: { isLoading },
  } = useLoading();
  const { id: vinylId } = useParams<{ id: string }>();

  useEffect(() => {
    window.scroll({ top: 0, behavior: "instant" });

    getVinylById(vinylId!);
  }, [vinylId, getVinylById]);

  const vinyl = useAppSelector((state) =>
    state.vinyls.vinylCollection.vinyls.find((vinyl) => vinyl.id === vinylId),
  );

  if (isLoading) {
    return <Loader />;
  }

  if (vinyl) {
    return (
      <>
        <h1 className="page-title">Info</h1>
        <VinylDetail vinyl={vinyl} />
      </>
    );
  }
};

export default VinylDetailPage;
