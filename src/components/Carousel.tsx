import { ChevronLeft, ChevronRight } from "lucide-react";
import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";

interface CarouselProps {
  title: string;
}

interface HeaderProps extends ProgressBarProps {
  title: string;
}

enum NavButtonDirection {
  left = "left",
  right = "right",
}

interface NavButtonProps {
  handleClick: () => void;
  direction: NavButtonDirection;
}

interface ProgressBarProps {
  pageCount: number;
  currentPage: number;
}

interface SliderProps {
  handleNext: () => void;
  handlePrev: () => void;
  currentPage: number;
  itemsPerScreen: number;
}

enum screenSizes {
  xs = 500,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  xxl = 1536,
}

const Header = ({ title, pageCount, currentPage }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="text-[20px] font-light md:text-heading-lg">{title}</div>
      <ProgressBar pageCount={pageCount} currentPage={currentPage} />
    </div>
  );
};

const NavButton = ({ handleClick, direction }: NavButtonProps) => {
  return (
    <button
      tabIndex={0}
      className={`border-none grow-0 shrink-0 bg-white bg-opacity-10 z-10 px-0 py-2 flex items-center justify-center transition-colors group overflow-hidden hover:bg-opacity-40 focus:bg-opacity-40 my-2 mx-0`}
      onClick={handleClick}
    >
      {direction === NavButtonDirection.left ? (
        <ChevronLeft className="transition-transform w-12 h-12 group-hover:scale-125 group-focus:scale-125" />
      ) : (
        <ChevronRight className="transition-transform w-12 h-12 group-hover:scale-125 group-focus:scale-125" />
      )}
    </button>
  );
};

const ProgressBar = ({ pageCount, currentPage }: ProgressBarProps) => {
  return (
    <div className="flex gap-2">
      {Array.from(Array(pageCount)).map((_, i) => {
        const isActive = i === currentPage;
        return (
          <div
            key={i}
            className={`shrink-0 grow-0 min-w-4 md:min-w-6 h-2 bg-white ${
              isActive ? "bg-opacity-90" : "bg-opacity-50"
            }`}
          />
        );
      })}
    </div>
  );
};

const Slider = ({
  children,
  handleNext,
  handlePrev,
  currentPage,
  itemsPerScreen,
}: PropsWithChildren<SliderProps>) => {
  return (
    <div className="flex justify-center overflow-hidden group/slider">
      <NavButton handleClick={handlePrev} direction={NavButtonDirection.left} />
      <div
        className={`grid grid-flow-col gap-4 grow transition-transform my-0 mx-2 *:aspect-video *:w-full *:overflow-hidden *:m-2`}
        style={{
          transform: `translateX(${currentPage * -100}%)`,
          gridAutoColumns: `calc(${100 / itemsPerScreen}% - 1rem)`,
        }}
      >
        {children}
      </div>
      <NavButton
        handleClick={handleNext}
        direction={NavButtonDirection.right}
      />
    </div>
  );
};

const Carousel = ({ children, title }: PropsWithChildren<CarouselProps>) => {
  const sliderRef = useRef(null);
  const [itemsPerScreen, setItemsPerScreen] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const itemCount = Array.isArray(children)
    ? children.length
    : children
      ? 1
      : 0;
  const pageCount = Math.ceil(itemCount / itemsPerScreen);

  useLayoutEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        let newItemsPerScreen;
        const { width } = entry.contentRect;
        if (width < screenSizes.xs) {
          newItemsPerScreen = 1;
        } else if (width < screenSizes.md) {
          newItemsPerScreen = 2;
        } else if (width < screenSizes.lg) {
          newItemsPerScreen = 3;
        } else {
          newItemsPerScreen = 4;
        }

        if (newItemsPerScreen !== itemsPerScreen) {
          setItemsPerScreen(newItemsPerScreen);
          const maxPage = Math.max(
            Math.ceil(itemCount / newItemsPerScreen) - 1,
            0
          );
          if (currentPage > maxPage) {
            setCurrentPage(maxPage);
          }
        }
      }
    });

    resizeObserver.observe(slider);

    return () => {
      resizeObserver.unobserve(slider);
    };
  }, [currentPage, itemsPerScreen]);

  const handleNext = () => {
    const newCurrentPage = currentPage + 1;
    setCurrentPage(() => (newCurrentPage > pageCount - 1 ? 0 : newCurrentPage));
  };

  const handlePrev = () => {
    const newCurrentPage = currentPage - 1;
    setCurrentPage(() => (newCurrentPage < 0 ? pageCount - 1 : newCurrentPage));
  };

  return (
    <div ref={sliderRef}>
      <Header title={title} pageCount={pageCount} currentPage={currentPage} />
      <Slider
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentPage={currentPage}
        itemsPerScreen={itemsPerScreen}
      >
        {children}
      </Slider>
    </div>
  );
};

export { Carousel };
