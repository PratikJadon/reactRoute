import React, { useEffect, useState } from "react";
import VanCard from "../Vans/vanCards";

export default function Vans() {
  let [vans, setVans] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        fetch("/api/vans/")
          .then((res) => res.json())
          .then((data) => setVans(data.vans));
      } catch (error) {
        console.log("Something Went wrong in Fetching Data" + error);
      }
    };
    getData();
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <VanCard
        key={van.id}
        id={van.id}
        img={van.imageUrl}
        name={van.name}
        price={van.price}
      />
    );
  });

  return (
    <div className="vans">
      <div className="vans--content">
        <p className="vans--content--p">Explore our van options</p>
        <div className="vans--content--btns--container">
          <button className="vans--content--btn">Simple</button>
          <button className="vans--content--btn">Luxury</button>
          <button className="vans--content--btn">Rugged</button>
          <button className="vans--content--btn">Clear-Filter</button>
        </div>
        <div className="vans--content--card--container">{vanElements}</div>
      </div>
      <div className="home--footer">©2022 #VANLIFE</div>
    </div>
  );
}
