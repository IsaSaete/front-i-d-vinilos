import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import setupStore from "../../../store/setupStore";
import { sanctuary, sanctuaryData, sanctuaryUpdated } from "../../fixtures";
import type { VinylState } from "../../slice/types";
import { act, renderHook } from "@testing-library/react";
import useVinyls from "../useVinyls";

describe("Given the updateVinyl function", () => {
  describe("When it's called with id Sanctuary and his updated data", () => {
    test("Then it should updated Sanctuary vinyl with the new data", async () => {
      const initialState: VinylState = {
        vinylCollection: { vinyls: [sanctuary], vinylsTotal: 1 },
      };

      const store = setupStore({ vinyls: initialState });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <MemoryRouter>
          <Provider store={store}>{children}</Provider>
        </MemoryRouter>
      );

      const { result } = renderHook(() => useVinyls(), { wrapper: wrapper });

      await act(async () => {
        result.current.updateVinyl(sanctuary.id, sanctuaryData);
      });

      const vinyls = result.current.vinylCollection.vinyls;

      expect(vinyls).toContainEqual(
        expect.objectContaining({ title: sanctuaryUpdated.title }),
      );
    });
  });
});
