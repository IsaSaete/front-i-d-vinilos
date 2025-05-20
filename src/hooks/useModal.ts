import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { closeModalCreator, openModalCreator } from "../slices/modalSlice";
import { useAppSelector } from "../store/hooks";

const useModal = () => {
  const modal = useAppSelector((state) => state.modal);

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
