import { PropsWithChildren } from "react";

interface ShowGridProps {}

const ShowGrid = ({ children }: PropsWithChildren<ShowGridProps>) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {children}
    </div>
  );
};

export { ShowGrid };
