import { Provider } from "react-redux";
import { act, renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import setupStore from "../../../store/setupStore";
import {
  aquellosOjosVerdes,
  weStillBelieve,
  weStillBelieveNotOwned,
} from "../../fixtures";
import type { VinylState } from "../../slice/types";
import useVinyls from "../useVinyls";

describe("Given the updateVinylByOwned function", () => {
  describe("When it's called with id of We Still Believe vinyl that is not in the collection", () => {
    test("Then it should update We Still Believe vinyl and have it in the collection", async () => {
      const initialState: VinylState = {
        vinylCollection: {
          vinyls: [weStillBelieveNotOwned, aquellosOjosVerdes],
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
        result.current.updateVinylByOwned(weStillBelieveNotOwned.id);
      });

      const vinyls = result.current.vinylCollection.vinyls;

      expect(vinyls).toContainEqual(
        expect.objectContaining({
          title: weStillBelieve.title,
          isOwned: true,
        }),
      );
    });
  });
});
