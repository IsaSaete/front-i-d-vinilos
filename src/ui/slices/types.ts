export type ModalState = {
  isOpen: boolean;
  isSuccess: boolean;
  text: string;
};

export type OpenModal = {
  isSuccess: boolean;
  text: string;
};

export type LoadingState = {
  isLoading: boolean;
};

export type feedbackState = {
  modal: ModalState;
  loading: LoadingState;
};
