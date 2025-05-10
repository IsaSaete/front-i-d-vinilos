import type { Vinyl } from "../../types";
import type { VinylDto } from "../dto/types";

export interface VinylClientStructure {
  getVinyls: (pageNumber?: number) => Promise<VinylsCollectionData>;
}

export interface VinylsCollectionData {
  vinyls: Vinyl[];
  vinylsTotal: number;
}

export interface VinylsDtoCollectionData {
  vinyls: VinylDto[];
  vinylsTotal: number;
}
