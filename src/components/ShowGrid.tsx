import { PropsWithChildren } from "react";

interface ShowGridProps {}

const ShowGrid = ({ children }: PropsWithChildren<ShowGridProps>) => {
  return <div className="flex flex-wrap gap-3">{children}</div>;
};

export { ShowGrid };
