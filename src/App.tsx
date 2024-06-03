import PageLayout from "@layouts/PageLayout";
import { Home } from "@pages/Home";
import { ShowProvider } from "@providers/showProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <div>movies</div>,
      },
      {
        path: "tv",
        element: <div>tv</div>,
      },
      {
        path: "bookmarked",
        element: <div>bookmarked</div>,
      },
      {
        path: "*",
        element: <div>not found</div>,
      },
    ],
  },
]);

function App() {
  return (
    <ShowProvider>
      <RouterProvider router={router} />
    </ShowProvider>
  );
}

export default App;
