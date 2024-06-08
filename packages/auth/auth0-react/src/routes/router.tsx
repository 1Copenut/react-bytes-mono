import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/Root";

import Index from "../pages/Index";
import About from "../pages/About";
import Error from "../pages/Error";
import AdminIndex from "../pages/admin/AdminIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/admin",
        element: <AdminIndex />,
      },
    ],
  },
]);

export default router;
