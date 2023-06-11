import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="home--nav">
        <Link to="/">
          <p>#VANLIFE</p>
        </Link>
        <div className="home--nav--links">
          <Link to="/vans" className="home--nav--a">
            <p> Vans</p>
          </Link>
          <Link to="/host" className="home--nav--a">
            <p> Host</p>
          </Link>
        </div>
      </div>
    </>
  );
}
