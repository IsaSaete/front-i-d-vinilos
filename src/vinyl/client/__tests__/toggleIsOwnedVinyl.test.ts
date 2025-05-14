import { http, HttpResponse } from "msw";
import { minimalNationDto } from "../../dto/fixturesDto";
import {
  aquellosOjosVerdes,
  elCirculo,
  elCirculoNotOwned,
  minimalNationNotOwned,
} from "../../fixtures";
import { server } from "../../mocks/node";
import VinylClient from "../VinylClient";

describe("Given the getVinylUpdate method of VinylClietn", () => {
  describe("When it's called with the id of Minimal Nation vinyl that is in the collection", () => {
    test("Then it should return Minimal Nation that is not in the collection", async () => {
      const vinylClient = new VinylClient();

      const vinylUpdate = await vinylClient.toggleIsOwnedVinyl(
        minimalNationDto._id,
      );

      expect(vinylUpdate).toStrictEqual(minimalNationNotOwned);
    });
  });

  describe("When it's called with the id of El Cícrulo vinyl that is not in the collection", () => {
    test("Then it should return El Círculo that is in the collection", async () => {
      const vinylClient = new VinylClient();

      const vinylUpdate = await vinylClient.toggleIsOwnedVinyl(
        elCirculoNotOwned.id,
      );

      expect(vinylUpdate).toStrictEqual(elCirculo);
    });
  });

  describe("When it'a called and the server responds with an error", () => {
    test("Then it should throw an error with message 'Failed to change the isOwned property of vinyl'", async () => {
      const expectedErrorMessage =
        "Failed to change the isOwned property of vinyl";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.patch(
          `${apiUrl}/vinyls/toggle-owned/${aquellosOjosVerdes.id}`,
          () => {
            return new HttpResponse(null, { status: 500 });
          },
        ),
      );

      const vinylClient = new VinylClient();

      const vinylUpdate = vinylClient.toggleIsOwnedVinyl(aquellosOjosVerdes.id);

      await expect(vinylUpdate).rejects.toThrow(expectedErrorMessage);
    });
  });
});
