import { IconLogo } from "@icons/IconLogo";
import { IconNavBookmark } from "@icons/IconNavBookmark";
import { IconNavHome } from "@icons/IconNavHome";
import { IconNavMovies } from "@icons/IconNavMovies";
import { IconNavTvSeries } from "@icons/IconNavTvSeries";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-app-blue">
      <Link to={"/"} className="text-app-red">
        <IconLogo />
      </Link>
      <div className="flex gap-5">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-app-white"
              : "text-app-light-blue hover:text-app-red"
          }
        >
          <IconNavHome />
        </NavLink>
        <NavLink
          to={"movies"}
          className={({ isActive }) =>
            isActive
              ? "text-app-white"
              : "text-app-light-blue hover:text-app-red"
          }
        >
          <IconNavMovies />
        </NavLink>
        <NavLink
          to={"tv"}
          className={({ isActive }) =>
            isActive
              ? "text-app-white"
              : "text-app-light-blue hover:text-app-red"
          }
        >
          <IconNavTvSeries />
        </NavLink>
        <NavLink
          to={"bookmarked"}
          className={({ isActive }) =>
            isActive
              ? "text-app-white"
              : "text-app-light-blue hover:text-app-red"
          }
        >
          <IconNavBookmark />
        </NavLink>
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
