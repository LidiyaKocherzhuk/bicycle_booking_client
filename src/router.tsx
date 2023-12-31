import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./layouts";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    // errorElement: <NotFound />,
  },
]);

export { router };
