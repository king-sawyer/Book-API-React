import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header.js";
import SearchInfo from "./SearchInfo/SearchInfo.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchInfo />
      </div>
    );
  }
}

export default App;
