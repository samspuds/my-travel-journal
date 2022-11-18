import { useState } from "react";
import React from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import data from "./data.jsx";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";

function App() {
  const cards = data.map((item) => {
    return <Card item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
