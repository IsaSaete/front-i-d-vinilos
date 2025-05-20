import { useDispatch } from "react-redux";
import { useCallback, useMemo } from "react";
import { useAppSelector } from "../../store/hooks";
import VinylClient from "../client/VinylClient";
import {
  addVinylCreator,
  deleteVinylCreator,
  loadVinylActionCreator,
  toggleVinylOwnedCreator,
} from "../slice/vinylSlice";
import type { VinylSendFormData } from "../../types";
import useModal from "../../hooks/useModal";

const useVinyls = () => {
  const { showModal } = useModal();

  const vinylCollection = useAppSelector(
    (state) => state.vinyls.vinylCollection,
  );

  const dispatch = useDispatch();

  const vinylClient = useMemo(() => new VinylClient(), []);

  const loadVinylsByPage = useCallback(
    async (pageNumber?: number): Promise<void> => {
      const vinyls = await vinylClient.getVinyls(pageNumber);

      dispatch(loadVinylActionCreator(vinyls));
    },
    [vinylClient, dispatch],
  );

  const updateVinylByOwned = async (vinylId: string): Promise<void> => {
    const updatedVinyl = await vinylClient.toggleIsOwnedVinyl(vinylId);

    dispatch(toggleVinylOwnedCreator(updatedVinyl));
  };

  const deleteVinylById = async (vinylId: string): Promise<void> => {
    try {
      const deletedVinyl = await vinylClient.deleteVinyl(vinylId);

      dispatch(deleteVinylCreator(deletedVinyl.id));

      showModal("Vinilo eliminado", true);
    } catch {
      showModal("No se ha podido eliminar este vinilo", false);
    }
  };

  const addNewVinyl = async (vinyl: VinylSendFormData): Promise<void> => {
    try {
      const addVinyl = await vinylClient.addVinyl(vinyl);

      dispatch(addVinylCreator(addVinyl));

      showModal("Vinilo añadido", true);
    } catch {
      showModal("Error al añadir este vinilo", false);
    }
  };

  return {
    vinylCollection,
    loadVinylsByPage,
    updateVinylByOwned,
    deleteVinylById,
    addNewVinyl,
  };
};

export default useVinyls;
