import { Provider } from "react-redux";
import store from "../../store/store";
import { act, renderHook } from "@testing-library/react";
import useModal from "../useModal";

describe("Given the showModal function", () => {
  describe("When it's called with a true and 'Todo bien'", () => {
    test("Then it should show a success modal with 'Todo bien'text", async () => {
      const expectedText = "Todo bien";

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useModal(), { wrapper: wrapper });

      await act(async () => {
        result.current.showModal(expectedText, true);
      });

      const isSuccessModal = result.current.modal.isSuccess;
      const text = result.current.modal.text;

      expect(isSuccessModal).toBe(true);
      expect(text).toBe(expectedText);
    });

    describe("When it's called with a false and 'Todo no tan bien' text", () => {
      test("Then it should show a failure modal with 'Todo no tan bien' text", async () => {
        const expectedText = "Todo no tan bien";

        const wrapper = ({ children }: { children: React.ReactNode }) => (
          <Provider store={store}>{children}</Provider>
        );

        const { result } = renderHook(() => useModal(), { wrapper: wrapper });

        await act(async () => {
          result.current.showModal(expectedText, false);
        });

        const isSuccessModal = result.current.modal.isSuccess;
        const text = result.current.modal.text;

        expect(isSuccessModal).toBe(false);
        expect(text).toBe(expectedText);
      });
    });
  });
});
