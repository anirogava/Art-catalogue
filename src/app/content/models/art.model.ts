export interface ArtResult {
  objectID: number;
  title: string;
  accessionYear: number;
  classification: string;
  artistAlphaSort: string;
  artistDisplayBio: string;
  creditLine: string;
  primaryImageSmall: string;
}
export interface Art {
  objectID: number;
  title: string;
  imageUrl: string;
  artist: string;
  artistBio: string;
  credits: string;
}
export interface ArtBody {
  objectIds: number;
  uid: string | null | undefined;
  review: string;
  rating: number;
}

export type ArtWithId = ArtBody & { id: string };

export interface ArtListItem {
  data: ArtWithId;
  art: ArtResult;
}
