import NavBar from "@components/NavBar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-app-dark-blue font-outfit text-app-white">
      <NavBar />
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
