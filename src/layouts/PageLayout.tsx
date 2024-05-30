import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-app-dark-blue font-outfit text-app-white">
      <main className="flex-1 overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
