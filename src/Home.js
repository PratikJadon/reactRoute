import React from "react";
import { Link } from "react-router-dom";
import home_image from "./home_content.png";
export default function Home() {
  return (
    <div className="home">
      <div className="home--nav">
        <Link to="/">
          <p>#VANLIFE</p>
        </Link>
        <Link to="/vans" className="home--nav--a">
          <p> Vans</p>
        </Link>
      </div>
      <div className="home--content">
        <p>You got the travel plans, we got the travel vans.</p>
        <img className="home--content--img" src={home_image} />
        <button className="home--content--btn">Find your van</button>
      </div>
      <div className="home--footer">©2022 #VANLIFE</div>
    </div>
  );
}
