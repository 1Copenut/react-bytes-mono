import { Outlet } from "react-router-dom";

import Header from "../components/header.global";
import { Auth0ProviderWithNavigate } from "../providers/auth0ProviderWithNavigate";

const Root = () => {
  return (
    <Auth0ProviderWithNavigate>
      <>
        <Header />
        <main id="main">
          <Outlet />
        </main>
      </>
    </Auth0ProviderWithNavigate>
  );
};

export default Root;
