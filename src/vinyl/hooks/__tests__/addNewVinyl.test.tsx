import { Provider } from "react-redux";
import { act, renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import setupStore from "../../../store/setupStore";
import {
  aquellosOjosVerdes,
  elCirculo,
  weStillBelieveData,
} from "../../fixtures";
import type { VinylState } from "../../slice/types";
import useVinyls from "../useVinyls";

describe("Given the addNewVinyl function", () => {
  describe("When it's called with We Still Believe vinyl data", () => {
    test("Then it should show We Still Believe in a vinyls collection", async () => {
      const expectedVinylsTotal = 3;

      const initialState: VinylState = {
        vinylCollection: {
          vinyls: [elCirculo, aquellosOjosVerdes],
          vinylsTotal: 2,
        },
      };

      const store = setupStore({ vinylsInfo: initialState });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <MemoryRouter>
          <Provider store={store}>{children}</Provider>
        </MemoryRouter>
      );

      const { result } = renderHook(() => useVinyls(), { wrapper: wrapper });

      await act(async () => {
        result.current.addNewVinyl(weStillBelieveData);
      });

      const vinyls = result.current.vinylCollection.vinyls;
      const vinylsTotal = result.current.vinylCollection.vinyls.length;

      expect(vinylsTotal).toBe(expectedVinylsTotal);
      expect(vinyls).toContainEqual(
        expect.objectContaining({ title: weStillBelieveData.title }),
      );
    });
  });
});
