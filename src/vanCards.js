import React from "react";
import { Link } from "react-router-dom";

export default function vanCards(prop) {
  return (
    <Link to={`/vans/${prop.id}`}>
      <div className="van--card">
        <img className="van--card--image" src={prop.img} />
        <p className="van--card--name">{prop.name}</p>
        <p className="van--card--price">{prop.price}</p>
      </div>
    </Link>
  );
}
