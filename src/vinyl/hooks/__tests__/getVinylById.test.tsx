import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { renderHook } from "@testing-library/react";
import { act } from "react";
import setupStore from "../../../store/setupStore";
import type { VinylState } from "../../slice/types";
import useVinyls from "../useVinyls";
import { aquellosOjosVerdes } from "../../fixtures";

describe("Given the getVinylById function", () => {
  describe("When it's called with if of We Still Believe vinyl", () => {
    test("Then it should show We Still Believe data complete", async () => {
      const expectVinylsTotal = 1;

      const initialState: VinylState = {
        vinylCollection: { vinyls: [], vinylsTotal: 0 },
      };
      const store = setupStore({ vinyls: initialState });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <MemoryRouter>
          <Provider store={store}>{children}</Provider>
        </MemoryRouter>
      );

      const { result } = renderHook(() => useVinyls(), { wrapper: wrapper });

      await act(async () => {
        result.current.getVinylById(aquellosOjosVerdes.id);
      });

      const vinyls = result.current.vinylCollection.vinyls;

      expect(vinyls).toContainEqual(
        expect.objectContaining({ title: aquellosOjosVerdes.title }),
      );
      expect(vinyls.length).toBe(expectVinylsTotal);
    });
  });
});
