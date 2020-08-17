import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/saved">Saved</Link>
      <h1>Google Books Search</h1>
    </header>
  );
}

export default Header;
