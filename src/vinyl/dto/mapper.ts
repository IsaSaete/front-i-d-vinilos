import type { Vinyl } from "../../types";
import type { VinylDto } from "./types";

export const mapVinylsDtoToVinyls = (vinylsDto: VinylDto[]): Vinyl[] => {
  const vinyls = vinylsDto.map<Vinyl>(({ _id, ...vinylDto }) => ({
    ...vinylDto,
    id: _id,
  }));

  return vinyls;
};
