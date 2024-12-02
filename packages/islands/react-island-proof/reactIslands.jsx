import React from "react";
import { createRoot } from "react-dom/client";
import PronounceVite from "./components/PronounceVite";

function App({ children }) {
  return children;
}

const ReactIslands = {
  pronounceVite: function prounceVite(element, props) {
    createRoot(element).render(
      <App>
        <PronounceVite />
      </App>
    );
  },
};

window.ReactIslands = ReactIslands;
