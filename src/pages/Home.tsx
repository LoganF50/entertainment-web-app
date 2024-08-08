import { SearchBar } from "@components/SearchBar";
import { ShowCard, TrendingShowCard } from "@components/ShowCard";
import { Carousel } from "@components/Carousel";
import { ShowGrid } from "@components/ShowGrid";
import { ShowSection } from "@components/ShowSection";
import { useShows } from "@hooks/useShows";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const {
    getTrendingShows,
    getRecommendedShows,
    getSearchedShows,
    shows,
    toggleBookmark,
  } = useShows();
  const [displayedShows, setDisplayedShows] = useState(shows);

  useEffect(() => {
    const shownShows = getSearchedShows(shows, search);

    setDisplayedShows(shownShows);
  }, [search, shows]);

  return (
    <div>
      <SearchBar
        placeholder={"Search for movies or TV series"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search === "" ? (
        <>
          <Carousel title={"Trending"}>
            {getTrendingShows().map((show) => {
              return (
                <TrendingShowCard
                  key={show.title}
                  handleBookmark={toggleBookmark}
                  handlePlay={() => alert(`play show: ${show.title}`)}
                  category={show.category}
                  isBookmarked={show.isBookmarked}
                  rating={show.rating}
                  thumbnailURL={show.thumbnail.trending!.small}
                  title={show.title}
                  year={show.year}
                  handleDetails={() => alert(`go to details: ${show.title}`)}
                />
              );
            })}
          </Carousel>
          <ShowSection title={"Recommended for you"}>
            <ShowGrid>
              {getRecommendedShows().map((show) => {
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
export { Home };
