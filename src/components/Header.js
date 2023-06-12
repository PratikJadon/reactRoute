import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const styles = {
    fontWeight: "bolder",
    textDecoration: "underline",
  };
  return (
    <>
      <div className="home--nav">
        <Link to="/">
          <p>#VANLIFE</p>
        </Link>
        <div className="home--nav--links">
          <NavLink
            style={({ isActive }) => (isActive ? styles : null)}
            to="/vans"
            className="home--nav--a"
          >
            <p> Vans</p>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? styles : null)}
            to="/host"
            className="home--nav--a"
          >
            <p> Host</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
