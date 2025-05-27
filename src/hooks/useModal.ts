import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { closeModalCreator, openModalCreator } from "../slices/feedbackSlice";
import { useAppSelector } from "../store/hooks";

const useModal = () => {
  const modal = useAppSelector((state) => state.feedback.modal);

  const dispatch = useDispatch();

  const showModal = useCallback(
    (text: string, isSuccess: boolean): void => {
      const action = openModalCreator({ text, isSuccess });

      dispatch(action);
    },
    [dispatch],
  );

  const closeModal = (): void => {
    dispatch(closeModalCreator());
  };

  return { modal, showModal, closeModal };
};

export default useModal;
