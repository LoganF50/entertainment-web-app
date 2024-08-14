import { useEffect, useState } from "react";
import jsonShowData from "@data/data.json";
import { Show } from "@interfaces/Show";
import { ShowContext } from "@context/showContext";

const LOCAL_STORAGE_SHOWS = "shows";

interface ShowProviderProps {
  children: React.ReactNode;
}

function ShowProvider({ children }: ShowProviderProps) {
  const [shows, setShows] = useState<Show[]>([]);

  // initial load
  useEffect(() => {
    const localShowData = localStorage.getItem(LOCAL_STORAGE_SHOWS);
    if (localShowData) {
      setShows(JSON.parse(localShowData));
    } else {
      const remoteShows: Show[] = jsonShowData;
      setShows(remoteShows);
    }
  }, []);

  //update localStorage
  useEffect(() => {
    if (shows.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_SHOWS, JSON.stringify(shows));
    }
  }, [shows]);

  function getBookmarkedMovies() {
    return getBookmarkedShows().filter((show) => show.category === "Movie");
  }

  function getBookmarkedTVSeries() {
    return getBookmarkedShows().filter((show) => show.category === "TV Series");
  }

  function getBookmarkedShows() {
    return shows.filter((show) => show.isBookmarked);
  }

  function getMovies() {
    return shows.filter((show) => show.category === "Movie");
  }

  function getRecommendedShows() {
    return shows.filter((show) => !show.isTrending);
  }

  function getSearchedShows(shows: Show[], query: string) {
    return shows.filter((show) =>
      show.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
  }

  function getTrendingShows() {
    return shows.filter((show) => show.isTrending);
  }

  function getTVSeries() {
    return shows.filter((show) => show.category === "TV Series");
  }

  function toggleBookmark(title: string) {
    const newShows = shows.map((show) => {
      if (show.title.toLowerCase() === title.toLowerCase()) {
        return { ...show, isBookmarked: !show.isBookmarked };
      }
      return show;
    });

    setShows(newShows);
  }

  const exposedData = {
    getBookmarkedMovies,
    getBookmarkedShows,
    getBookmarkedTVSeries,
    getMovies,
    getRecommendedShows,
    getSearchedShows,
    getTrendingShows,
    getTVSeries,
    shows,
    toggleBookmark,
  };

  return (
    <ShowContext.Provider value={exposedData}>{children}</ShowContext.Provider>
  );
}

export { ShowProvider };
