import { createContext } from "react";
import { Show } from "@interfaces/Show";

interface ShowContextProps {
  getBookmarkedMovies: () => Show[];
  getBookmarkedShows: () => Show[];
  getBookmarkedTVSeries: () => Show[];
  getMovies: () => Show[];
  getRecommendedShows: () => Show[];
  getSearchedShows: (shows: Show[], query: string) => Show[];
  getTrendingShows: () => Show[];
  getTVSeries: () => Show[];
  shows: Show[];
  toggleBookmark: (title: string) => void;
}

const ShowContext = createContext<ShowContextProps | undefined>(undefined);

export { ShowContext };
