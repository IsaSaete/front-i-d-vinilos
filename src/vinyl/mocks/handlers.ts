import { http, HttpResponse } from "msw";
import { vinylsFixturesDto } from "../dto/fixturesDto";
import type { VinylsDtoCollectionData } from "../client/types";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("Not found");
}

export const handlers = [
  http.get(`${apiUrl}/vinyls`, () => {
    return HttpResponse.json<VinylsDtoCollectionData>({
      vinyls: vinylsFixturesDto,
      vinylsTotal: vinylsFixturesDto.length,
    });
  }),
];
