import React from "react";
import Row from "./components/Row";

import requests from "./api/request";

import "./App.css";
const App = () => {
  return (
    <div className="App">
      <h2>Netflix clone</h2>

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
    </div>
  );
};

export default App;
