import { IconBookmarkEmpty } from "@icons/IconBookmarkEmpty";
import { IconBookmarkFull } from "@icons/IconBookmarkFull";
import { IconCategoryMovie } from "@icons/IconCategoryMovie";
import { IconCategoryTv } from "@icons/IconCategoryTv";
import { IconPlay } from "@icons/IconPlay";
import { Show } from "@interfaces/Show";

interface TrendingShowCardProps {
  category: string;
  isBookmarked: boolean;
  rating: string;
  thumbnailURL: string;
  title: string;
  year: number;
  handleBookmark: (title: string) => void;
}

interface TrendingShowCardBookmarkProps {
  isBookmarked: boolean;
  onClick: (title: string) => void;
}

interface TrendingShowCardDetailsProps {
  category: string;
  rating: string;
  title: string;
  year: number;
}

interface TrendingShowCardOverlayProps {
  onClick: () => void;
}

const TrendingShowCardDetails = ({
  category,
  rating,
  title,
  year,
}: TrendingShowCardDetailsProps) => {
  const DotSeparator = () => (
    <div className="h-1 w-1 rounded-full bg-app-white" />
  );

  return (
    <div className="absolute left-2 bottom-1 flex flex-col">
      <div className="flex items-center gap-1 text-body-sm">
        <div>{year}</div>
        <DotSeparator />
        <div className="flex items-center gap-1">
          {category === "Movie" ? <IconCategoryMovie /> : <IconCategoryTv />}
          <div>{category}</div>
        </div>
        <DotSeparator />
        <div>{rating}</div>
      </div>
      <div className="text-heading-xs">{title}</div>
    </div>
  );
};

const TrendingShowCard = ({
  category,
  isBookmarked,
  rating,
  thumbnailURL,
  title,
  year,
  handleBookmark,
}: TrendingShowCardProps) => {
  return (
    <div className="relative">
      <div className="relative h-36 aspect-video rounded-lg overflow-hidden group/card cursor-pointer">
        <img src={thumbnailURL} className="absolute h-[100%] w-[100%] z-0" />
        <TrendingShowCardDetails
          category={category}
          rating={rating}
          title={title}
          year={year}
        />
        <div className="hidden group-hover/card:block">
          <div className="absolute h-[100%] w-[100%] z-10 hidden group-hover/card:flex bg-app-dark-blue opacity-30" />
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-30 flex items-start gap-3 rounded-3xl bg-app-white bg-opacity-30 pl-1 pr-5 py-1">
            <IconPlay />
            <div>Play</div>
          </div>
        </div>
      </div>
      <button
        className="absolute top-3 right-3 group/bookmark z-40"
        onClick={() => handleBookmark(title)}
      >
        {isBookmarked ? (
          <div className="bg-app-dark-blue bg-opacity-50 p-3 rounded-full group-hover/bookmark:hidden">
            <IconBookmarkFull />
          </div>
        ) : (
          <div className="bg-app-dark-blue bg-opacity-50 p-3 rounded-full group-hover/bookmark:hidden">
            <IconBookmarkEmpty />
          </div>
        )}
        <div className="hidden bg-app-white text-app-dark-blue p-3 rounded-full group-hover/bookmark:block">
          <IconBookmarkEmpty />
        </div>
      </button>
    </div>
  );
};
export { TrendingShowCard };
