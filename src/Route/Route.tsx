import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Page/Home";

export const MainRoute = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
