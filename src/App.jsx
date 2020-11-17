import React from "react";
import "./styles.css";
import Account from "./Account";
import Login from "./Login";
import town from "./figure/town.svg";

export default function App() {
  return (
    <div class="App">
      <Account />
      <Login />
      <img class="town" src={town} alt="town" />
    </div>
  );
}
