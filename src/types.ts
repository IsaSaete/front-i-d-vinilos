export interface Vinyl {
  id: string;
  title: string;
  artist: string;
  country: string;
  releaseDate: string;
  genre: string;
  format: string;
  coverImageUrl: string;
  styles?: string[];
  purchasedAt?: string;
  notes?: string;
  isOwned: boolean;
}

export type VinylFormData = Omit<Vinyl, "id" | "styles"> & { styles: string };

export type VinylSendFormData = Omit<Vinyl, "id">;
