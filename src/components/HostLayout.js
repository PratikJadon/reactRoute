import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <div className="host--nav">
        <Link to="/host">
          <p>Dashboard</p>
        </Link>
        <Link to="/host/income">
          <p>Income</p>
        </Link>
        <Link to="/host/review">
          <p>Review</p>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
