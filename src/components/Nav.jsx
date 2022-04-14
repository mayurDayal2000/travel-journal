import React from "react";
import globe from "../media/globe.svg";

const Nav = function () {
  return (
    <nav>
      <img src={globe} alt="travel journal icon" />
      <h2>My Travel Journal</h2>
    </nav>
  );
};

export default Nav;
