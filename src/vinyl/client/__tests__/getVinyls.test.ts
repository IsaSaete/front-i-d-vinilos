import { http, HttpResponse } from "msw";
import { vinylsFixturesDto } from "../../dto/fixturesDto";
import { mapVinylsDtoToVinyls } from "../../dto/mapper";
import { server } from "../../mocks/node";
import VinylClient from "../VinylClient";

describe("Given the getVinyls method od VinylClient", () => {
  describe("When it's called", () => {
    test("Then it should return Strange Weather, Isn't It?, LP5, Spirit of Eden, In Colour, From Deewee & Minimal Nation vinyls ", async () => {
      const vinylsByPage = 6;
      const expectedVinyls = mapVinylsDtoToVinyls(vinylsFixturesDto).slice(
        0,
        vinylsByPage,
      );

      const vinylClient = new VinylClient();

      const vinylsCollection = await vinylClient.getVinyls();

      const vinyls = vinylsCollection.vinyls.slice(0, vinylsByPage);

      expect(vinyls).toStrictEqual(expectedVinyls);
    });

    test("Then it should return 12 as total number of vinyls", async () => {
      const expectedVinylsTotal =
        mapVinylsDtoToVinyls(vinylsFixturesDto).length;

      const vinylClient = new VinylClient();

      const vinylCollection = await vinylClient.getVinyls();

      const vinylsTotal = vinylCollection.vinylsTotal;

      expect(vinylsTotal).toBe(expectedVinylsTotal);
    });
  });

  describe("When it's called and the server responds with an error", () => {
    test("Then it should thro an error with message 'Error fetching posts'", () => {
      const expectedErrorMessage = "Error fetching vinyls";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.get(`${apiUrl}/vinyls`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const vinylClient = new VinylClient();

      const vinyls = vinylClient.getVinyls();

      expect(vinyls).rejects.toThrow(expectedErrorMessage);
    });
  });
});
