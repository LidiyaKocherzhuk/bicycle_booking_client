import { createBrowserRouter, Navigate } from "react-router-dom";

import { NotFound } from "./components";
import { MainLayout } from "./layouts";
import { BicyclePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Navigate to={"bicycles"} /> },
      { path: "bicycles", element: <BicyclePage /> },
    ],
  },
]);

export { router };
