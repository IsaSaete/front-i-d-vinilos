import type { Vinyl, VinylFormData, VinylSendFormData } from "../../types";
import type { VinylDto } from "./types";

export const mapVinylsDtoToVinyls = (vinylsDto: VinylDto[]): Vinyl[] => {
  const vinyls = vinylsDto.map<Vinyl>(({ _id, ...vinylDto }) => ({
    ...vinylDto,
    id: _id,
  }));

  return vinyls;
};

export const mapVinylDtotoVinyl = ({ _id, ...vinylDto }: VinylDto): Vinyl => {
  return { ...vinylDto, id: _id };
};

export const mapVinylFormDataToVinySend = ({
  styles,
  releaseDate,
  ...formData
}: VinylFormData): VinylSendFormData => {
  const stylesArray = styles
    ? styles
        .replaceAll(/[.,;#|/]/g, " ")
        .replaceAll(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter((style) => style !== "")
    : [];
  return {
    ...formData,
    styles: stylesArray,
    releaseDate: new Date(releaseDate),
  };
};
