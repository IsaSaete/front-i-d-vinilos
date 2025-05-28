import type { Vinyl, VinylSendFormData } from "../../types";
import type { VinylDto } from "../dto/types";

export interface VinylClientStructure {
  getVinyls: (pageNumber?: number) => Promise<VinylsCollectionData>;
  toggleIsOwnedVinyl: (vinylId: string) => Promise<Vinyl>;
  deleteVinyl: (vinylId: string) => Promise<Vinyl>;
  addVinyl: (vinyl: VinylSendFormData) => Promise<Vinyl>;
  getVinylById: (vinylId: string) => Promise<Vinyl>;
  updateVinyl: (vinylId: string, vinylUpdated: VinylDto) => Promise<Vinyl>;
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
