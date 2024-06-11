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
    <div className="flex flex-col gap-4 py-2">
      <h1 className="text-heading-md">{title}</h1>
      <div
        className={`flex gap-3 ${
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
