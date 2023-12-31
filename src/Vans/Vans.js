import React from "react";
import VanCard from "../Vans/vanCards";
import { useLoaderData, useSearchParams } from "react-router-dom";
import getvans from "../util";

export function loader() {
  return getvans();
}

export default function Vans() {
  let vans = useLoaderData();
  let [filterVan, setFilterVan] = useSearchParams();

  const filteredEl = filterVan.get("type")
    ? vans.filter((van) => van.type === filterVan.get("type"))
    : vans;
  const vanElements = filteredEl.map((van) => {
    return (
      <VanCard
        key={van.id}
        id={van.id}
        img={van.imageUrl}
        name={van.name}
        price={van.price}
        urlst={filterVan.toString()}
      />
    );
  });

  function handleClick(key, value) {
    setFilterVan((prevparam) => {
      if (value === null) {
        prevparam.delete(key);
      } else {
        prevparam.set(key, value);
      }
      return prevparam;
    });
  }

  return (
    <div className="vans">
      <div className="vans--content">
        <p className="vans--content--p">Explore our van options</p>
        <div className="vans--content--btns--container">
          <button
            onClick={() => handleClick("type", "simple")}
            className="vans--content--btn"
          >
            Simple
          </button>
          <button
            onClick={() => handleClick("type", "luxury")}
            className="vans--content--btn"
          >
            Luxury
          </button>
          <button
            onClick={() => handleClick("type", "rugged")}
            className="vans--content--btn"
          >
            Rugged
          </button>
          {filterVan.get("type") && (
            <button
              onClick={() => handleClick("type", null)}
              className="vans--content--btn"
            >
              Clear-Filter
            </button>
          )}
        </div>
        <div className="vans--content--card--container">{vanElements}</div>
      </div>
      <div className="home--footer">©2022 #VANLIFE</div>
    </div>
  );
}
