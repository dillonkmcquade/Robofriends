import React from "react";
import Cardlist from "./Cardlist.js";
import SearchBox from "./SearchBox.js";
import { robots } from "./robots.js";

const App = () => {
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox />
      <Cardlist robots={robots} />
    </div>
  );
};

export default App;
