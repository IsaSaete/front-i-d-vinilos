import { Provider } from "react-redux";
import { act, renderHook } from "@testing-library/react";
import useModal from "../useModal";
import store from "../../../store/store";

describe("Given the closeModal function", () => {
  describe("When it's called", () => {
    test("Then it should close de modal", async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useModal(), { wrapper: wrapper });

      await act(async () => {
        result.current.closeModal();
      });

      const isOpened = result.current.modal.isOpen;

      expect(isOpened).toBe(false);
    });
  });
});
