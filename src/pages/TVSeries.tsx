import { SearchBar } from "@components/SearchBar";
import { ShowCard } from "@components/ShowCard";
import { ShowGrid } from "@components/ShowGrid";
import { ShowSection } from "@components/ShowSection";
import { useShows } from "@hooks/useShows";
import { useEffect, useState } from "react";

const TVSeries = () => {
  const [search, setSearch] = useState("");
  const { getTVSeries, getSearchedShows, shows, toggleBookmark } = useShows();
  const [displayedShows, setDisplayedShows] = useState(getTVSeries());

  useEffect(() => {
    const shownShows = getSearchedShows(getTVSeries(), search);

    setDisplayedShows(shownShows);
  }, [search, shows]);

  return (
    <div>
      <SearchBar
        placeholder={"Search for TV series"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search === "" ? (
        <>
          <ShowSection title={"TV Series"}>
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
                    thumbnailURL={show.thumbnail.regular.small}
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
                  thumbnailURL={show.thumbnail.regular.small}
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
export { TVSeries };
