import { http, HttpResponse } from "msw";
import { aquellosOjosVerdesDto } from "../../dto/fixturesDto";
import { mapVinylDtotoVinyl } from "../../dto/mapper";
import { aquellosOjosVerdes } from "../../fixtures";
import { server } from "../../mocks/node";
import VinylClient from "../VinylClient";

describe("Given the getVinylById method of VinylClient", () => {
  describe("When it's called with Aquellos Ojos verdes id", () => {
    test("Then it should return Aquellos ojos verdes vinyl data", async () => {
      const vinylClient = new VinylClient();

      const foundVinyl = await vinylClient.getVinylById(aquellosOjosVerdes.id);

      const vinyl = mapVinylDtotoVinyl(aquellosOjosVerdesDto);

      expect(foundVinyl).toStrictEqual(vinyl);
    });
  });

  describe("When it's called and the server responds with an error", () => {
    test("Then it should throw an error with message 'Error getting this vinyl'", async () => {
      const expectedErrorMessage = "Error getting this vinyl";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.get(`${apiUrl}/vinyls/${aquellosOjosVerdes.id}`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );
      const vinylClient = new VinylClient();

      const foundVinyl = vinylClient.getVinylById(aquellosOjosVerdes.id);

      expect(foundVinyl).rejects.toThrow(expectedErrorMessage);
    });
  });
});
