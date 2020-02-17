import React, { useState, useEffect } from "react";
import Cardlist from '../../components/Cardlist';
import SearchBox from "../../components/SearchBox.js";
import ErrorBoundary from "../../components/ErrorBoundary.js";
import Scroll from "../../components/Scroll.js";

const HomePage = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        setRobots({ robots: users });
      });
  });

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });


  if (!robots.length) {
    return <h1>Loading..</h1>;
  } else {
    return (
      <div className="tc homepage-container">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={event => setSearchField(event.target.value)} />
        <Scroll>
          <ErrorBoundary>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
};

export default HomePage;
