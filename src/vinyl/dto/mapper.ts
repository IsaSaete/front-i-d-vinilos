import type { Vinyl } from "../../types";
import type { VinylDto } from "./types";

export const mapVinylsDtoToVinyls = (vinylsDto: VinylDto[]): Vinyl[] => {
  const vinyls = vinylsDto.map<Vinyl>(({ _id, releaseDate, ...vinylDto }) => ({
    ...vinylDto,
    id: _id,
    releaseDate: new Date(releaseDate),
  }));

  return vinyls;
};
