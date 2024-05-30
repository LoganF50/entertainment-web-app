import { PropsWithChildren } from "react";
import { NavLink, To } from "react-router-dom";

interface NavbarLinkProps {
  to: To;
}

const NavbarLink = ({ children, to }: PropsWithChildren<NavbarLinkProps>) => {
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
export default NavbarLink;
