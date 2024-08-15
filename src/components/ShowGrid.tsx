import { PropsWithChildren } from "react";

interface ShowGridProps {}

const ShowGrid = ({ children }: PropsWithChildren<ShowGridProps>) => {
  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
};

export { ShowGrid };
