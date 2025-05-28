import type {
  Vinyl,
  VinylFormData,
  VinylUpdated,
  VinylSendFormData,
} from "../../types";
import type { VinylDto } from "./types";

export const mapVinylsDtoToVinyls = (vinylsDto: VinylDto[]): Vinyl[] => {
  const vinyls = vinylsDto.map<Vinyl>((vinylDto) =>
    mapVinylDtotoVinyl(vinylDto),
  );

  return vinyls;
};

export const mapVinylDtotoVinyl = ({ _id, ...vinylDto }: VinylDto): Vinyl => {
  const vinyl = { ...vinylDto, id: _id };
  return vinyl;
};

const cleanStyles = (styles: string = ""): string[] => {
  return styles
    .replaceAll(/[.;#|/]/g, ", ")
    .replaceAll(/(,(?!\s))/g, ", ")
    .split(",")
    .map((style) => style.trim())
    .filter((style) => style.length > 0);
};

export const mapVinylFormDataToVinylSend = ({
  styles,
  releaseDate,
  ...formData
}: VinylFormData): VinylSendFormData => {
  const stylesArray = cleanStyles(styles);

  return {
    ...formData,
    styles: stylesArray,
    releaseDate: new Date(releaseDate),
  };
};

export const mapVinylToVinylDto = ({
  id,
  styles,
  ...vinyl
}: VinylUpdated): VinylDto => {
  const stylesArray = cleanStyles(styles);

  return {
    ...vinyl,
    _id: id,
    styles: stylesArray,
  };
};
