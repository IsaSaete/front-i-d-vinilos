import { Provider } from "react-redux";
import { act, renderHook } from "@testing-library/react";
import store from "../../store/store";
import useLoading from "../useLoading";

describe("Given the startLoading function", () => {
  describe("When it's called", () => {
    test("Then it should show the app is loading", async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useLoading(), { wrapper: wrapper });

      await act(async () => {
        result.current.startLoading();
      });

      const isLoading = result.current.loadingState.isLoading;

      expect(isLoading).toBe(true);
    });
  });
});
