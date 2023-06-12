import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  let [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  });

  let vanEls = vans.map((van) => (
    <div className="host--vans--wrapper">
      <Link key={van.id} to={`/host/vans/${van.id}`}>
        <div className="host--vans--container">
          <img
            className="host--vans--image"
            src={van.imageUrl}
            alt="hostvans"
          />
          <div className="host--vans--info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
          <button className="host--vans--btn">Edit</button>
        </div>
      </Link>
    </div>
  ));

  return <div className="host--vans-background">{vanEls}</div>;
}
