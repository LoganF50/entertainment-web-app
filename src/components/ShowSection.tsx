import { PropsWithChildren } from "react";

interface ShowSectionProps {
  title: string;
}

const ShowSection = ({
  children,
  title,
}: PropsWithChildren<ShowSectionProps>) => {
  return (
    <div className="flex flex-col gap-4 py-2">
      <h1 className="text-heading-md">{title}</h1>
      <div>{children}</div>
    </div>
  );
};
export { ShowSection };
