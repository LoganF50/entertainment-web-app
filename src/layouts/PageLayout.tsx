import NavBar from "@components/NavBar";
import { SearchBar } from "@components/SearchBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-app-dark-blue font-outfit text-app-white">
      <NavBar />
      <main className="flex-1 overflow-y-scroll p-4">
        <SearchBar
          placeholder={"Search for movies or TV series"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
