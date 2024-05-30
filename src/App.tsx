import PageLayout from "@layouts/PageLayout";
import { ShowProvider } from "@providers/showProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <div>home</div>,
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
