import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  let [van, setVan] = useState(null);
  let [apistate, setApiState] = useState(null);
  let location = useLocation();

  useEffect(() => {
    const getdata = async () => {
      try {
        let res = await fetch(`/api/vans/${params.id}`);
        res = await res.json();
        setVan(res.vans);
      } catch (error) {
        setApiState(error);
        console.log(error);
      }
    };
    getdata();
  }, [params.id]);

  const search = location.state?.search || "";
  console.log(search, location);
  return (
    <div>
      <div className="van--detail--container">
        {van ? (
          <div className="van--detail">
            <Link to={`..?${search}`} relative="path">
              {search === "" ? "Back to all vans" : "Back to filtered vans"}
            </Link>
            <img
              className="van--detail--image"
              src={van.imageUrl}
              alt="vanimg"
            />
            <div className="van--detail--type">{van.type}</div>
            <div className="van--detail--name">{van.name}</div>
            <div className="van--detail--price">${van.price}/day</div>
            <div className="van--detail--description">${van.description}</div>
          </div>
        ) : (
          <p>{apistate === null ? "Loading" : apistate}</p>
        )}
      </div>
    </div>
  );
}
