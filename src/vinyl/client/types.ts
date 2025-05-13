import type { Vinyl } from "../../types";
import type { VinylDto } from "../dto/types";

export interface VinylClientStructure {
  getVinyls: (pageNumber?: number) => Promise<VinylsCollectionData>;
  getVinylUpdate: (vinylId: string) => Promise<Vinyl>;
}

export interface VinylsCollectionData {
  vinyls: Vinyl[];
  vinylsTotal: number;
}

export interface VinylsDtoCollectionData {
  vinyls: VinylDto[];
  vinylsTotal: number;
}

export interface ResponseVinylDto {
  vinyl: VinylDto;
}
