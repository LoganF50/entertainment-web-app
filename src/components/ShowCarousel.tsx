import { ChevronLeft, ChevronRight } from "lucide-react";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

interface ShowCarouselProps {
  translateAmount?: number;
}

const ShowCarousel = ({
  children,
  translateAmount = -1,
}: PropsWithChildren<ShowCarouselProps>) => {
  //TODO if translateAmount is negative (not passed) then set to container width

  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    if (!containerRef!.current) return;

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [translate]);

  return (
    <div className="overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex gap-3 transition-transform"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {children}
      </div>
      {isLeftVisible && (
        <button
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-app-dark-blue from-10% to-transparent group/left"
          onClick={() => {
            setTranslate((translate) => {
              const newTranslate = translate - translateAmount;
              if (newTranslate <= 0) return 0;
              return newTranslate;
            });
          }}
        >
          <ChevronLeft className="w-8 h-8 group-hover/left:w-12 group-hover/left:h-12" />
        </button>
      )}
      {isRightVisible && (
        <button
          className="absolute right-0 top-0 h-full bg-gradient-to-l from-app-dark-blue from-10% to-transparent group/right"
          onClick={() => {
            setTranslate((translate) => {
              if (containerRef.current == null) return translate;

              const newTranslate = translate + translateAmount;
              const edge = containerRef.current.scrollWidth;
              const width = containerRef.current.clientWidth;

              if (newTranslate + width >= edge) return edge - width;
              return newTranslate;
            });
          }}
        >
          <ChevronRight className="w-8 h-8 group-hover/right:w-12 group-hover/right:h-12" />
        </button>
      )}
    </div>
  );
};

export { ShowCarousel };
