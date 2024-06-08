import { Outlet } from "react-router-dom";

import Header from "../components/header.global";

const Root = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
