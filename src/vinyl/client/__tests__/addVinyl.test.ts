import { http, HttpResponse } from "msw";
import { weStillBelieveNotOwnedDto } from "../../dto/fixturesDto";
import { mapVinylDtotoVinyl } from "../../dto/mapper";
import { weStillBelieveData } from "../../fixtures";
import { server } from "../../mocks/node";
import VinylClient from "../VinylClient";

describe("Given the addVinyl method of VinylClient", () => {
  describe("When it's called with We Still Believe vinyl data", () => {
    test("Then it should return We Still Believe vinyl", async () => {
      const vinylClient = new VinylClient();

      const newVinyl = await vinylClient.addVinyl(weStillBelieveData);

      const addVinyl = mapVinylDtotoVinyl(weStillBelieveNotOwnedDto);

      expect(newVinyl).toStrictEqual(addVinyl);
    });
  });

  describe("When it's called and the server responds with an error", () => {
    test("Then ir should throw an error with message 'Error adding new vinyl", () => {
      const expectedErrorMessage = "Error adding new vinyl";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.post(`${apiUrl}/vinyls`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );
      const vinylClient = new VinylClient();

      const newVinyl = vinylClient.addVinyl(weStillBelieveData);

      expect(newVinyl).rejects.toThrow(expectedErrorMessage);
    });
  });
});
