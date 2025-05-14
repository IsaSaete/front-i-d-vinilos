import { http, HttpResponse } from "msw";
import {
  elCirculoDto,
  minimalNationDto,
  vinylsFixturesDto,
  vinylsFixturesDto2,
  weStillBelieve,
} from "../dto/fixturesDto";
import type { VinylsDtoCollectionData } from "../client/types";
import type { VinylDto } from "../dto/types";
import {
  elCirculoNotOwned,
  minimalNation,
  weStillBelieveNotOwned,
} from "../fixtures";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("Not found");
}

export const handlers = [
  http.get(`${apiUrl}/vinyls`, ({ request }) => {
    const url = new URL(request.url);
    const currentPage = url.searchParams.get("page");

    if (currentPage === "2") {
      return HttpResponse.json<VinylsDtoCollectionData>({
        vinyls: vinylsFixturesDto2,
        vinylsTotal: vinylsFixturesDto2.length,
      });
    }

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

  http.patch(
    `${apiUrl}/vinyls/toggle-owned/${weStillBelieveNotOwned.id}`,
    () => {
      return HttpResponse.json<{ vinyl: VinylDto }>({
        vinyl: { ...weStillBelieve, isOwned: true },
      });
    },
  ),
];
