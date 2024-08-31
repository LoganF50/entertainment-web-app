import { IconLogo } from "@icons/IconLogo";
import { IconNavBookmark } from "@icons/IconNavBookmark";
import { IconNavHome } from "@icons/IconNavHome";
import { IconNavMovies } from "@icons/IconNavMovies";
import { IconNavTvSeries } from "@icons/IconNavTvSeries";
import { Link } from "react-router-dom";
import NavBarLink from "./NavBarLink";

const Navbar = () => {
  return (
    <nav className="flex xl:flex-col md:mx-6 md:mt-6 md:rounded-lg xl:rounded-2xl xl:mb-6 items-center justify-between p-6 bg-app-blue">
      <Link to={"/"} className="xl:shrink xl:pb-16 text-app-red">
        <IconLogo />
      </Link>
      <div className="flex xl:flex-col xl:grow justify-self-start gap-7">
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
          className="w-8 md:w-10 xl:w-12 rounded-full border border-app-white"
          src="/entertainment-web-app/assets/image-avatar.png"
          alt="profile"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
