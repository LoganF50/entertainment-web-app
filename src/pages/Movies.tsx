import { SearchBar } from "@components/SearchBar";
import { ShowCard } from "@components/ShowCard";
import { ShowGrid } from "@components/ShowGrid";
import { ShowSection } from "@components/ShowSection";
import { useShows } from "@hooks/useShows";
import { useEffect, useState } from "react";

const Movies = () => {
  const [search, setSearch] = useState("");
  const { getMovies, getSearchedShows, shows, toggleBookmark } = useShows();
  const [displayedShows, setDisplayedShows] = useState(getMovies());

  useEffect(() => {
    const shownShows = getSearchedShows(getMovies(), search);

    setDisplayedShows(shownShows);
  }, [search, shows]);

  return (
    <div>
      <SearchBar
        placeholder={"Search for movies"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search === "" ? (
        <>
          <ShowSection title={"Movies"}>
            <ShowGrid>
              {displayedShows.map((show) => {
                return (
                  <ShowCard
                    key={show.title}
                    handleBookmark={toggleBookmark}
                    handlePlay={() => alert(`play show: ${show.title}`)}
                    category={show.category}
                    isBookmarked={show.isBookmarked}
                    rating={show.rating}
                    thumbnailURL={show.thumbnail.regular.large}
                    title={show.title}
                    year={show.year}
                    handleDetails={() => alert(`go to details: ${show.title}`)}
                  />
                );
              })}
            </ShowGrid>
          </ShowSection>
        </>
      ) : (
        <ShowSection
          title={`Found ${displayedShows.length} ${
            displayedShows.length === 1 ? "result" : "results"
          } for '${search}'`}
        >
          <ShowGrid>
            {displayedShows.map((show) => {
              return (
                <ShowCard
                  key={show.title}
                  thumbnailURL={show.thumbnail.regular.large}
                  isBookmarked={show.isBookmarked}
                  title={show.title}
                  handleBookmark={toggleBookmark}
                  category={show.category}
                  rating={show.rating}
                  year={show.year}
                  handleDetails={() => alert(`go to details: ${show.title}`)}
                  handlePlay={() => alert(`play show: ${show.title}`)}
                />
              );
            })}
          </ShowGrid>
        </ShowSection>
      )}
    </div>
  );
};
export { Movies };
