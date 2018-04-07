import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            Red Dice
          </Link>
        </div>

        <div className="navbar-header">
          <Link to="/signup" className="navbar-brand">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
