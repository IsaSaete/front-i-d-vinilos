import { http, HttpResponse } from "msw";
import {
  weStillBelieve,
  weStillBelieveNotOwnedDto,
} from "../../dto/fixturesDto";
import { mapVinylDtotoVinyl } from "../../dto/mapper";
import { server } from "../../mocks/node";
import VinylClient from "../VinylClient";

describe("Given the updateVinyl method of VinylCliente", () => {
  describe("When it's called with We still Believe id and modified data", () => {
    test("Then it should return We still Believe with the new data", async () => {
      const vinylClient = new VinylClient();

      const vinylToUpdate = await vinylClient.updateVinyl(
        weStillBelieve._id,
        weStillBelieveNotOwnedDto,
      );

      const vinyl = mapVinylDtotoVinyl(weStillBelieve);

      expect(vinylToUpdate).toStrictEqual(vinyl);
    });
  });

  describe("When it's called and the server responds with an error", () => {
    test("Then it should throw an error with message 'Error modifying this vinyl'", async () => {
      const expectedErrorMessage = "Error modifying this vinyl";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.put(`${apiUrl}/vinyls/${weStillBelieve._id}`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );
      const vinylClient = new VinylClient();

      const foundVinyl = vinylClient.updateVinyl(
        weStillBelieve._id,
        weStillBelieveNotOwnedDto,
      );

      expect(foundVinyl).rejects.toThrow(expectedErrorMessage);
    });
  });
});
