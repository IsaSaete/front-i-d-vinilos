import { Provider } from "react-redux";
import { act, renderHook } from "@testing-library/react";
import setupStore from "../../../app/setupStore";
import { aquellosOjosVerdes, weStillBelieve } from "../../fixtures";
import type { VinylState } from "../../slice/types";
import useVinyls from "../useVinyls";

describe("Given the deleteVinylById function", () => {
  describe("When it`s called with id of We Still Beleive vinyl", () => {
    test("Then it should delete We Still Beleive vinyl", async () => {
      const expectedVinylsTotal = 1;

      const initialState: VinylState = {
        vinylCollection: {
          vinyls: [weStillBelieve, aquellosOjosVerdes],
          vinylsTotal: 2,
        },
        isloading: false,
      };

      const store = setupStore({ vinyls: initialState });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useVinyls(), { wrapper: wrapper });
      await act(async () => {
        result.current.deleteVinylById(aquellosOjosVerdes.id);
      });

      const vinyls = result.current.vinylCollection.vinyls;

      expect(vinyls).not.toContainEqual(
        expect.objectContaining({ title: aquellosOjosVerdes.title }),
      );
      expect(vinyls.length).toBe(expectedVinylsTotal);
    });
  });
});
