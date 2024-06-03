import { PropsWithChildren } from "react";
import { NavLink, To } from "react-router-dom";

interface NavBarLinkProps {
  to: To;
}

const NavBarLink = ({ children, to }: PropsWithChildren<NavBarLinkProps>) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-app-white" : "text-app-light-blue hover:text-app-red"
      }
    >
      {children}
    </NavLink>
  );
};
export default NavBarLink;
