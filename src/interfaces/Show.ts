interface Thumbnail {
  small: string;
  medium?: string;
  large: string;
}

export interface Show {
  title: string;
  thumbnail: {
    trending?: Thumbnail;
    regular: Thumbnail;
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}
