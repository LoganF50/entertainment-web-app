import { IconBookmarkEmpty } from "@icons/IconBookmarkEmpty";
import { IconBookmarkFull } from "@icons/IconBookmarkFull";
import { IconCategoryMovie } from "@icons/IconCategoryMovie";
import { IconCategoryTv } from "@icons/IconCategoryTv";
import { IconPlay } from "@icons/IconPlay";

interface ShowCardProps
  extends ShowCardBookmarkProps,
    ShowCardDetailsProps,
    ShowCardPlayOverlayProps {
  thumbnailURL: string;
}

interface ShowCardBookmarkProps {
  isBookmarked: boolean;
  title: string;
  handleBookmark: (title: string) => void;
}

interface ShowCardDetailsProps {
  category: string;
  rating: string;
  title: string;
  year: number;
  handleDetails: () => void;
}

interface ShowCardPlayOverlayProps {
  handlePlay: () => void;
}

const ShowCardBookmark = ({
  isBookmarked,
  title,
  handleBookmark,
}: ShowCardBookmarkProps) => {
  return (
    <button onClick={() => handleBookmark(title)} className="group">
      <div className="rounded-full bg-slate-100 text-slate-900 p-2 hidden group-hover:block">
        <IconBookmarkEmpty />
      </div>
      <div className="rounded-full bg-slate-900 bg-opacity-50 text-slate-100 p-2 group-hover:hidden">
        {isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
      </div>
    </button>
  );
};

const ShowCardDetails = ({
  category,
  rating,
  title,
  year,
  handleDetails,
}: ShowCardDetailsProps) => {
  const DotSeparator = () => (
    <div className="h-1 w-1 rounded-full bg-slate-100" />
  );

  return (
    <div onClick={handleDetails} className="flex flex-col cursor-pointer">
      <div className="flex items-center gap-2 text-[12px] md:text-body-md opacity-75">
        <div>{year}</div>
        <DotSeparator />
        <div className="flex items-center gap-1">
          <div>
            {category === "Movie" ? <IconCategoryMovie /> : <IconCategoryTv />}
          </div>
          <div>{category}</div>
        </div>
        <DotSeparator />
        <div>{rating}</div>
      </div>
      <div className="text-[15px] font-medium md:text-heading-sm">{title}</div>
    </div>
  );
};

const ShowCardPlayOverlay = ({ handlePlay }: ShowCardPlayOverlayProps) => {
  return (
    <div
      className="absolute inset-0 cursor-pointer grid place-content-center bg-black bg-opacity-25"
      onClick={handlePlay}
    >
      <div className="flex gap-2 bg-white bg-opacity-25 rounded-full p-2">
        <IconPlay />
        <div className="text-heading-xs">Play</div>
      </div>
    </div>
  );
};

const ShowCard = ({
  category,
  isBookmarked,
  rating,
  title,
  thumbnailURL,
  year,
  handleBookmark,
  handleDetails,
  handlePlay,
}: ShowCardProps) => {
  return (
    <div className="relative shrink-0">
      <div className="relative rounded-lg overflow-hidden group/play aspect-[14/9]">
        <img
          className="group-hover/play:scale-110 duration-300 w-full h-full"
          src={`${import.meta.env.BASE_URL}${thumbnailURL}`}
        />
        <div className="hidden group-hover/play:block">
          <ShowCardPlayOverlay handlePlay={handlePlay} />
        </div>
      </div>
      <div className="pt-2">
        <ShowCardDetails
          category={category}
          rating={rating}
          title={title}
          year={year}
          handleDetails={handleDetails}
        />
      </div>
      <div className="absolute top-2 right-2">
        <ShowCardBookmark
          isBookmarked={isBookmarked}
          title={title}
          handleBookmark={handleBookmark}
        />
      </div>
    </div>
  );
};

const TrendingShowCard = ({
  category,
  isBookmarked,
  rating,
  title,
  thumbnailURL,
  year,
  handleBookmark,
  handleDetails,
  handlePlay,
}: ShowCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="absolute inset-0 group/play">
        <img
          className="h-full w-full object-cover group-hover/play:scale-110 duration-300"
          src={`${import.meta.env.BASE_URL}${thumbnailURL}`}
        />
        <div className="hidden group-hover/play:block">
          <ShowCardPlayOverlay handlePlay={handlePlay} />
        </div>
      </div>
      <div className="absolute bottom-2 left-2">
        <ShowCardDetails
          category={category}
          rating={rating}
          title={title}
          year={year}
          handleDetails={handleDetails}
        />
      </div>
      <div className="absolute top-2 right-2">
        <ShowCardBookmark
          isBookmarked={isBookmarked}
          title={title}
          handleBookmark={handleBookmark}
        />
      </div>
    </div>
  );
};

export { ShowCard, TrendingShowCard };
