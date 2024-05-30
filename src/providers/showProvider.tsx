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

  function toggleBookmark(title: string) {
    const newShows = shows.map((show) => {
      if (show.title.toLowerCase() === title.toLowerCase()) {
        return { ...show, isBookmarked: !show.isBookmarked };
      }
      return show;
    });

    setShows(newShows);
  }

  const exposedData = { shows, toggleBookmark };

  return (
    <ShowContext.Provider value={exposedData}>{children}</ShowContext.Provider>
  );
}

export { ShowProvider };
