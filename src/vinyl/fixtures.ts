import type { Vinyl, VinylSendFormData } from "../types";
import type { VinylDto } from "./dto/types";

export const aquellosOjosVerdes: Vinyl = {
  id: "14fbf39d8c9d1e4dabc5f1e1",
  title: "Aquellos Ojos Verdes",
  artist: "Carlos Gardel",
  country: "Argentina",
  releaseDate: "1935-01-01",
  genre: "Tango",
  format: "7''",
  coverImageUrl: "https://example.com/aquellos-ojos-verdes.jpg",
  styles: ["Tango", "Ranchera"],
  purchasedAt: "Revolver",
  notes:
    "Un clásico eterno del tango argentino. El vinilo ofrece una calidad sonora que remite a la época dorada del tango.",
  isOwned: true,
};

export const elCirculoNotOwned: Vinyl = {
  id: "14fbf39d8c9d1e4dabc5f1e2",
  title: "El Círculo",
  artist: "Kase.O",
  country: "España",
  releaseDate: "2016-03-11",
  genre: "Hip Hop",
  format: "Vinilo",
  coverImageUrl: "https://example.com/el-circulo-kaseo.jpg",
  styles: ["Rap", "Hip Hop", "Lírico"],
  purchasedAt: "Revolver",
  notes:
    "Uno de los discos más importantes del rap español, 'El Círculo' muestra la madurez lírica y artística de Kase.O.",
  isOwned: false,
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

export const vinylsTestData = [aquellosOjosVerdes, elCirculoNotOwned];

export const minimalNation: Vinyl = {
  id: "64f9e15c8f3f1b2a4cde1a06",
  title: "Minimal Nation",
  artist: "Robert Hood",
  country: "USA",
  releaseDate: "1994-05-01",
  genre: "Techno",
  format: '12"',
  coverImageUrl: "https://example.com/minimal-nation.jpg",
  styles: ["Minimal Techno"],
  notes:
    "Un pilar del techno de Detroit, 'Minimal Nation' cambió el paradigma al demostrar que menos puede ser más.",
  isOwned: true,
};

export const minimalNationNotOwned: Vinyl = {
  id: "64f9e15c8f3f1b2a4cde1a06",
  title: "Minimal Nation",
  artist: "Robert Hood",
  country: "USA",
  releaseDate: "1994-05-01",
  genre: "Techno",
  format: '12"',
  coverImageUrl: "https://example.com/minimal-nation.jpg",
  styles: ["Minimal Techno"],
  notes:
    "Un pilar del techno de Detroit, 'Minimal Nation' cambió el paradigma al demostrar que menos puede ser más.",
  isOwned: false,
};

export const weStillBelieveNotOwned: Vinyl = {
  id: "64fbf39d8c9d1e4dabc5f1e2",
  title: "We Still Believe",
  artist: "The Blessed Madonna",
  country: "USA",
  releaseDate: "2016-07-15",
  genre: "Techno",
  format: '12"',
  coverImageUrl: "https://example.com/we-still-believe.jpg",
  styles: ["Detroit Techno", "House"],
  notes:
    "Una pieza que conecta el espíritu del techno clásico con el activismo contemporáneo.",
  isOwned: false,
};

export const weStillBelieve: Vinyl = {
  id: "64fbf39d8c9d1e4dabc5f1e2",
  title: "We Still Believe",
  artist: "The Blessed Madonna",
  country: "USA",
  releaseDate: "2016-07-15",
  genre: "Techno",
  format: '12"',
  coverImageUrl: "https://example.com/we-still-believe.jpg",
  styles: ["Detroit Techno", "House"],
  notes:
    "Una pieza que conecta el espíritu del techno clásico con el activismo contemporáneo.",
  isOwned: true,
};

export const weStillBelieveData: VinylSendFormData = {
  title: "We Still Believe",
  artist: "The Blessed Madonna",
  country: "USA",
  releaseDate: new Date("2016-07-15"),
  genre: "Techno",
  format: '12"',
  coverImageUrl: "https://example.com/we-still-believe.jpg",
  styles: ["Detroit Techno", "House"],
  notes:
    "Una pieza que conecta el espíritu del techno clásico con el activismo contemporáneo.",
  isOwned: true,
};

export const sanctuaryData: VinylSendFormData = {
  title: "Sanctuary",
  artist: "Octo Octa",
  country: "USA",
  releaseDate: new Date("2019-08-02"),
  genre: "House",
  format: '12"',
  coverImageUrl: "https://example.com/sanctuary.jpg",
  styles: ["Breakbeat", "Deep House"],
  notes:
    "Un viaje sonoro introspectivo que mezcla breakbeats cálidos con melodías envolventes, explorando identidad y libertad.",
  isOwned: true,
};

export const sanctuary: Vinyl = {
  id: "64fbf39d8c9d1e4daba3b1e1",
  title: "Sanctuary",
  artist: "Octo Octa",
  country: "USA",
  releaseDate: "2019-08-02",
  genre: "House",
  format: '12"',
  coverImageUrl: "https://example.com/sanctuary.jpg",
  styles: ["Breakbeat", "Deep House"],
  notes:
    "Un viaje sonoro introspectivo que mezcla breakbeats cálidos con melodías envolventes, explorando identidad y libertad.",
  isOwned: true,
};

export const sanctuaryUpdated: VinylDto = {
  _id: "64fbf39d8c9d1e4daba3b1e1",
  title: "Sanctuary 2019",
  artist: "Octo Octa",
  country: "USA",
  releaseDate: "2019-08-02",
  genre: "House",
  format: '12"',
  coverImageUrl: "https://example.com/sanctuary.jpg",
  styles: ["Breakbeat", "Deep House"],
  notes:
    "Un viaje sonoro introspectivo que mezcla breakbeats cálidos con melodías envolventes, explorando identidad y libertad.",
  isOwned: true,
};
