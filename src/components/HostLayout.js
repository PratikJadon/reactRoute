import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const styles = {
    fontWeight: "bolder",
    textDecoration: "underline",
  };
  return (
    <>
      <div className="host--nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? styles : null)}
          to="/host"
        >
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styles : null)}
          to="/host/income"
        >
          <p>Income</p>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styles : null)}
          to="/host/vans"
        >
          <p>Vans</p>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styles : null)}
          to="/host/review"
        >
          <p>Review</p>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
