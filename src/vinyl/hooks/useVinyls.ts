import { useDispatch } from "react-redux";
import { useCallback, useMemo } from "react";
import { useAppSelector } from "../../app/hooks";
import VinylClient from "../client/VinylClient";
import { loadVinylActionCreator } from "../slice/vinylSlice";

const useVinyls = () => {
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

  return { vinylCollection, loadVinylsByPage };
};

export default useVinyls;
