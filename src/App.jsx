import React from "react";

import "./css/reset.css";
import "./css/app.scss";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import data from "./components/data.js";

const App = function () {
  return (
    <>
      <Nav />
      <MainContent data={data} />
    </>
  );
};

export default App;
