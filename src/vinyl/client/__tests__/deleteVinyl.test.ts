import { http, HttpResponse } from "msw";
import { aquellosOjosVerdesDto } from "../../dto/fixturesDto";
import { mapVinylDtotoVinyl } from "../../dto/mapper";
import { aquellosOjosVerdes } from "../../fixtures";
import VinylClient from "../VinylClient";
import { server } from "../../mocks/node";

describe("Given the deleteVinyl method of VinylClient", () => {
  describe("When it's called with the Aquellos ojos Verdes id", () => {
    test("Then it should return Aquellos ojos verdes vinyl", async () => {
      const vinylClient = new VinylClient();

      const deletedVinyl = await vinylClient.deleteVinyl(aquellosOjosVerdes.id);

      const vinyl = mapVinylDtotoVinyl(aquellosOjosVerdesDto);

      expect(deletedVinyl).toStrictEqual(vinyl);
    });
  });

  describe("When it's called and the server responds with an error", () => {
    test("Then it should throw an error with message 'Error deleting vinyl'", async () => {
      const expectedErrorMessage = "Error deleting vinyl";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.delete(`${apiUrl}/vinyls/${aquellosOjosVerdes.id}`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const vinylClient = new VinylClient();

      const vinylDeleted = vinylClient.deleteVinyl(aquellosOjosVerdes.id);

      await expect(vinylDeleted).rejects.toThrow(expectedErrorMessage);
    });
  });
});
