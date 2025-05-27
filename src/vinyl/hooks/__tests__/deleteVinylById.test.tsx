import { Provider } from "react-redux";
import { act, renderHook } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { MemoryRouter } from "react-router";
import setupStore from "../../../store/setupStore";
import { aquellosOjosVerdes, weStillBelieve } from "../../fixtures";
import type { VinylState } from "../../slice/types";
import useVinyls from "../useVinyls";
import { server } from "../../mocks/node";
import type { VinylDto } from "../../dto/types";
import {
  aquellosOjosVerdesDto,
  weStillBelieveNotOwnedDto,
} from "../../dto/fixturesDto";

describe("Given the deleteVinylById function", () => {
  describe("When it`s called with id of We Still Beleive vinyl", () => {
    test("Then it should delete We Still Beleive vinyl", async () => {
      const expectedVinylsTotal = 1;
      const apiUrl = import.meta.env.VITE_API_URL;

      const initialState: VinylState = {
        vinylCollection: {
          vinyls: [weStillBelieve, aquellosOjosVerdes],
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

      server.use(
        http.get(`${apiUrl}/vinyls`, () => {
          return HttpResponse.json<{ vinylsDto: VinylDto[] }>({
            vinylsDto: [aquellosOjosVerdesDto, weStillBelieveNotOwnedDto],
          });
        }),
      );

      await act(async () => {
        result.current.deleteVinylById(aquellosOjosVerdes.id, 1);
      });

      const vinyls = result.current.vinylCollection.vinyls;

      expect(vinyls).not.toContainEqual(
        expect.objectContaining({ title: aquellosOjosVerdes.title }),
      );
      expect(vinyls.length).toBe(expectedVinylsTotal);
    });
  });
});
