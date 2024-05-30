import { IconLogo } from "@icons/IconLogo";
import { IconNavBookmark } from "@icons/IconNavBookmark";
import { IconNavHome } from "@icons/IconNavHome";
import { IconNavMovies } from "@icons/IconNavMovies";
import { IconNavTvSeries } from "@icons/IconNavTvSeries";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-app-blue">
      <Link to={"/"} className="text-app-red">
        <IconLogo />
      </Link>
      <div className="flex gap-5">
        <NavbarLink to={"/"}>
          <IconNavHome />
        </NavbarLink>
        <NavbarLink to={"movies"}>
          <IconNavMovies />
        </NavbarLink>
        <NavbarLink to={"tv"}>
          <IconNavTvSeries />
        </NavbarLink>
        <NavbarLink to={"bookmarked"}>
          <IconNavBookmark />
        </NavbarLink>
      </div>
      <Link to={"/profile"}>
        <img
          className="w-7 rounded-full border border-app-white"
          src="assets/image-avatar.png"
          alt="profile"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
