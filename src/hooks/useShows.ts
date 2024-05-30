import { ShowContext } from "@context/showContext";
import { useContext } from "react";

function useShows() {
  const context = useContext(ShowContext);

  if (!context) {
    throw new Error("useShowContext must be used within a ShowContextProvider");
  }

  return context;
}

export { useShows };
