import { PropsWithChildren } from "react";

interface ShowSectionProps {
  shouldWrap?: boolean;
  title: string;
}

const ShowSection = ({
  children,
  shouldWrap = true,
  title,
}: PropsWithChildren<ShowSectionProps>) => {
  return (
    <div>
      <h1 className="text-heading-md">{title}</h1>
      <div
        className={`flex gap-1 ${
          !shouldWrap
            ? "flex-no-wrap overflow-x-auto"
            : "flex-wrap overflow-y-auto"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
export { ShowSection };
