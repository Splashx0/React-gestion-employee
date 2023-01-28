import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand mx-2 p-0">
        Emloyees
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/create" className="nav-item nav-link">
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
