import { mapVinylsDtoToVinyls } from "../dto/mapper";
import type {
  VinylClientStructure,
  VinylsCollectionData,
  VinylsDtoCollectionData,
} from "./types";

class VinylClient implements VinylClientStructure {
  private apiUtl = import.meta.env.VITE_API_URL;

  public getVinyls = async (
    pageNumber?: number,
  ): Promise<VinylsCollectionData> => {
    const url = !pageNumber
      ? `${this.apiUtl}/vinyls`
      : `${this.apiUtl}/vinyls?page=${pageNumber}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching vinyls");
    }

    const { vinyls: vinylsDto, vinylsTotal } =
      (await response.json()) as VinylsDtoCollectionData;

    const vinyls = mapVinylsDtoToVinyls(vinylsDto);

    const vinylsCollectionData = {
      vinyls,
      vinylsTotal,
    };

    return vinylsCollectionData;
  };
}

export default VinylClient;
