import { createContext } from "react";
import { Show } from "@interfaces/Show";

interface ShowContextProps {
  shows: Show[];
  toggleBookmark: (title: string) => void;
}

const ShowContext = createContext<ShowContextProps | undefined>(undefined);

export { ShowContext };
