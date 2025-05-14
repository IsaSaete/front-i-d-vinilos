import { http, HttpResponse } from "msw";
import {
  elCirculoDto,
  minimalNationDto,
  vinylsFixturesDto,
} from "../dto/fixturesDto";
import type { VinylsDtoCollectionData } from "../client/types";
import type { VinylDto } from "../dto/types";
import { elCirculoNotOwned, minimalNation } from "../fixtures";

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

  http.patch(`${apiUrl}/vinyls/toggle-owned/${minimalNation.id}`, () => {
    return HttpResponse.json<{ vinyl: VinylDto }>({
      vinyl: { ...minimalNationDto, isOwned: false },
    });
  }),

  http.patch(`${apiUrl}/vinyls/toggle-owned/${elCirculoNotOwned.id}`, () => {
    return HttpResponse.json<{ vinyl: VinylDto }>({
      vinyl: { ...elCirculoDto, isOwned: true },
    });
  }),
];
