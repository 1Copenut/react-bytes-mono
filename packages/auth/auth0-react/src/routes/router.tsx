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
    errorElement: <Error title="404: Page not found" />,
    children: [
      {
        path: "/",
        element: <Index title="App home" />,
      },
      {
        path: "/about",
        element: <About title="About my app" />,
      },
      {
        path: "/admin",
        element: <AdminIndex title="Admin area" />,
      },
    ],
  },
]);

export default router;
