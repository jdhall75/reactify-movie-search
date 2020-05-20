import React from "react";
import "./styles.css";

import SearchMovie from "./components/SearchMovie";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovie />
    </div>
  );
}
