import React from "react";
import { Link } from "react-router-dom";

export default function vanCards(prop) {
  return (
    <Link to={`${prop.id}`} state={{ search: prop.urlst }}>
      <div className="van--card">
        <img className="van--card--image" src={prop.img} alt="vancards" />
        <p className="van--card--name">{prop.name}</p>
        <p className="van--card--price">$ {prop.price}/day</p>
      </div>
    </Link>
  );
}
