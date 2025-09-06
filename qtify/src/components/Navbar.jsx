import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import Button from "./Button";   // ✅ import your component
import "./Navbar.css";           // ✅ global or module styles

function Navbar({ searchData }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
