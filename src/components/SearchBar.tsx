import { IconSearch } from "@icons/IconSearch";
import { ChangeEventHandler } from "react";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar = ({ placeholder, value, onChange }: SearchBarProps) => {
  return (
    <div className="flex gap-4 items-center text-heading-md">
      <label htmlFor="search">
        <IconSearch />
      </label>
      <input
        className="flex-1 py-2 text-app-white bg-app-dark-blue caret-app-red border-2 border-app-dark-blue focus:outline-none focus:border-b-app-light-blue"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id="search"
      />
    </div>
  );
};
export { SearchBar };
