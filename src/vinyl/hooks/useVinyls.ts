import { useDispatch } from "react-redux";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../store/hooks";
import VinylClient from "../client/VinylClient";
import {
  addVinylCreator,
  deleteVinylCreator,
  getVinylCreator,
  loadVinylActionCreator,
  toggleVinylOwnedCreator,
} from "../slice/vinylSlice";
import type { VinylSendFormData } from "../../types";
import useModal from "../../hooks/useModal";
import useLoading from "../../hooks/useLoading";

const useVinyls = () => {
  const navigate = useNavigate();
  const { showModal } = useModal();
  const { endLoading, startLoading } = useLoading();

  const vinylCollection = useAppSelector(
    (state) => state.vinyls.vinylCollection,
  );

  const dispatch = useDispatch();

  const vinylClient = useMemo(() => new VinylClient(), []);

  const loadVinylsByPage = useCallback(
    async (pageNumber?: number): Promise<void> => {
      const timeout = setTimeout(() => startLoading(), 200);

      try {
        const vinyls = await vinylClient.getVinyls(pageNumber);

        dispatch(loadVinylActionCreator(vinyls));
      } catch {
        showModal("Error al cargar los vinilos", false);
      } finally {
        clearTimeout(timeout);

        endLoading();
      }
    },
    [vinylClient, dispatch, startLoading, endLoading, showModal],
  );

  const updateVinylByOwned = async (vinylId: string): Promise<void> => {
    const updatedVinyl = await vinylClient.toggleIsOwnedVinyl(vinylId);

    dispatch(toggleVinylOwnedCreator(updatedVinyl));
  };

  const deleteVinylById = async (
    vinylId: string,
    pageNumber: number,
  ): Promise<void> => {
    const timeout = setTimeout(() => startLoading(), 200);

    try {
      const deletedVinyl = await vinylClient.deleteVinyl(vinylId);

      dispatch(deleteVinylCreator(deletedVinyl.id));

      showModal("Vinilo eliminado", true);
      navigate(`/vinilos?page=${pageNumber}`);
      loadVinylsByPage();
    } catch {
      showModal("No se ha podido eliminar este vinilo", false);
    } finally {
      clearTimeout(timeout);

      endLoading();
    }
  };

  const addNewVinyl = async (vinyl: VinylSendFormData): Promise<void> => {
    const timeout = setTimeout(() => startLoading(), 200);

    try {
      const addVinyl = await vinylClient.addVinyl(vinyl);

      dispatch(addVinylCreator(addVinyl));

      showModal("Vinilo añadido", true);
    } catch {
      showModal("Error al añadir este vinilo", false);
    } finally {
      clearTimeout(timeout);

      endLoading();
    }
  };

  const getVinylById = useCallback(
    async (vinylId: string): Promise<void> => {
      const timeout = setTimeout(() => startLoading(), 200);

      try {
        const selectedVinyl = await vinylClient.getVinylById(vinylId);

        dispatch(getVinylCreator(selectedVinyl));
      } catch {
        showModal("Error al cargar este vinilo", false);
      } finally {
        clearTimeout(timeout);

        endLoading();
      }
    },
    [vinylClient, dispatch, startLoading, endLoading, showModal],
  );

  return {
    vinylCollection,
    loadVinylsByPage,
    updateVinylByOwned,
    deleteVinylById,
    addNewVinyl,
    getVinylById,
  };
};

export default useVinyls;
