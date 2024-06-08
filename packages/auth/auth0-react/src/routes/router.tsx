import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "../layouts/Root";

import Index from "../pages/Index";
import About from "../pages/About";
import Error from "../pages/errors/Error";
import NotFound from "../pages/errors/NotFound";
import AdminIndex from "../pages/admin/AdminIndex";

const errorComponent = <Error title="500: Server error" />;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        path="/"
        element={<Index title="App home" />}
        errorElement={errorComponent}
      />
      <Route
        path="/about"
        element={<About title="About my app" />}
        errorElement={errorComponent}
      />
      <Route
        path="/admin"
        element={<AdminIndex title="Admin area" />}
        errorElement={errorComponent}
      />
      <Route path="*" element={<NotFound title="404: Page not found" />} />
    </Route>
  )
);
