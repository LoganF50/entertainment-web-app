import { PropsWithChildren } from "react";

interface ShowSectionProps {
  title: string;
}

const ShowSection = ({
  children,
  title,
}: PropsWithChildren<ShowSectionProps>) => {
  return (
    <div className="flex flex-col gap-6 py-4">
      <h1 className="text-[20px] font-light md:text-heading-lg">{title}</h1>
      {children}
    </div>
  );
};
export { ShowSection };
