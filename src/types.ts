export interface Vinyl {
  id: string;
  title: string;
  artist: string;
  country: string;
  releaseDate: Date;
  genre: string;
  format: string;
  coverImageUrl: string;
  styles?: string[];
  purchasedAt?: string;
  notes?: string;
  isOwned: boolean;
}
