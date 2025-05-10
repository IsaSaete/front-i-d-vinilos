import type { Vinyl } from "../../types";

export type VinylDto = Omit<Vinyl, "id" | "releaseDate"> & {
  _id: string;
  releaseDate: string;
};
