import { IconLogo } from "@icons/IconLogo";
import { IconNavBookmark } from "@icons/IconNavBookmark";
import { IconNavHome } from "@icons/IconNavHome";
import { IconNavMovies } from "@icons/IconNavMovies";
import { IconNavTvSeries } from "@icons/IconNavTvSeries";
import { Link } from "react-router-dom";
import NavBarLink from "./NavBarLink";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-app-blue">
      <Link to={"/"} className="text-app-red">
        <IconLogo />
      </Link>
      <div className="flex gap-5">
        <NavBarLink to={"/"}>
          <IconNavHome />
        </NavBarLink>
        <NavBarLink to={"movies"}>
          <IconNavMovies />
        </NavBarLink>
        <NavBarLink to={"tv"}>
          <IconNavTvSeries />
        </NavBarLink>
        <NavBarLink to={"bookmarked"}>
          <IconNavBookmark />
        </NavBarLink>
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
