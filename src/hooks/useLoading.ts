import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { useAppSelector } from "../store/hooks";
import {
  endLoadingCreator,
  startLoadingCreator,
} from "../slices/feedbackSlice";

const useLoading = () => {
  const loadingState = useAppSelector((state) => state.feedback.loading);

  const dispatch = useDispatch();

  const startLoading = useCallback((): void => {
    dispatch(startLoadingCreator());
  }, [dispatch]);

  const endLoading = useCallback((): void => {
    dispatch(endLoadingCreator());
  }, [dispatch]);

  return { loadingState, startLoading, endLoading };
};

export default useLoading;
