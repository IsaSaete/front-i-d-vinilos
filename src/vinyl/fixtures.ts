import type { Vinyl } from "../types";

export const aquellosOjosVerdes: Vinyl = {
  id: "14fbf39d8c9d1e4dabc5f1e1",
  title: "Aquellos Ojos Verdes",
  artist: "Carlos Gardel",
  country: "Argentina",
  releaseDate: "1935-01-01",
  genre: "Tango",
  format: "Vinilo",
  coverImageUrl: "https://example.com/aquellos-ojos-verdes.jpg",
  styles: ["Tango", "Ranchera"],
  purchasedAt: "2024-05-10",
  notes:
    "Un clásico eterno del tango argentino. El vinilo ofrece una calidad sonora que remite a la época dorada del tango.",
  isOwned: true,
};
export const elCirculo: Vinyl = {
  id: "14fbf39d8c9d1e4dabc5f1e2",
  title: "El Círculo",
  artist: "Kase.O",
  country: "España",
  releaseDate: "2016-03-11",
  genre: "Hip Hop",
  format: "Vinilo",
  coverImageUrl: "https://example.com/el-circulo-kaseo.jpg",
  styles: ["Rap", "Hip Hop", "Lírico"],
  purchasedAt: "2024-05-09",
  notes:
    "Uno de los discos más importantes del rap español, 'El Círculo' muestra la madurez lírica y artística de Kase.O.",
  isOwned: true,
};
export const vinylsTestData = [aquellosOjosVerdes, elCirculo];
