import { SearchBar } from "@components/SearchBar";
import { ShowSection } from "@components/ShowSection";
import { useShows } from "@hooks/useShows";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const { shows, toggleBookmark } = useShows();
  const [displayedShows, setDisplayedShows] = useState(shows);

  useEffect(() => {
    const shownShows = shows.filter((show) => {
      if (search == "") {
        return show;
      }

      if (show.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        return show;
      }
    });

    setDisplayedShows(shownShows);
  }, [search, shows]);

  const getTrendingShows = () => {
    return displayedShows.filter((show) => {
      if (show.isTrending) {
        return show;
      }
    });
  };

  const getRecommendedShows = () => {
    return displayedShows.filter((show) => {
      if (!show.isTrending) {
        return show;
      }
    });
  };

  //TODO create show cards (trending + regular)
  //TODO different section for 0 results?

  return (
    <div>
      <SearchBar
        placeholder={"Search for movies or TV series"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search === "" ? (
        <>
          <ShowSection title={"Trending"} shouldWrap={false}>
            {getTrendingShows().map((show) => {
              return <div>{show.title}</div>;
            })}
          </ShowSection>
          <ShowSection title={"Recommended for you"}>
            {getRecommendedShows().map((show) => {
              return <div>{show.title}</div>;
            })}
          </ShowSection>
        </>
      ) : (
        <ShowSection
          title={`Found ${displayedShows.length} ${
            displayedShows.length === 1 ? "result" : "results"
          } for '${search}'`}
        >
          {displayedShows.map((show) => {
            return <div>{show.title}</div>;
          })}
        </ShowSection>
      )}
    </div>
  );
};
export { Home };
