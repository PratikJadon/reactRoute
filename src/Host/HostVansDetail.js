import React, { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";

export default function HostVansDetail() {
  let [van, setVan] = useState([]);

  const params = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, []);

  return (
    <div className="host--vandetail">
      <div className="host--vandetail--wrapper">
        <div className="host--vandetail--container">
          <img className="host--vandetail--image" src={van.imageUrl} />
          <div className="host--vandetail--info">
            <p className="host--vandetail--info--type">{van.type}</p>
            <p className="host--vandetail--info--name">{van.name}</p>
            <p className="host--vandetail--info--price">${van.price}/day</p>
          </div>
        </div>
        <div className="host--vandetail--nav">
          <NavLink
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : {}
            }
            end
            to="."
          >
            <p>Detail</p>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : {}
            }
            to="pricing"
          >
            <p>Pricing</p>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : {}
            }
            to="photo"
          >
            <p>Photo</p>
          </NavLink>
        </div>
        <Outlet context={van} />
      </div>
    </div>
  );
}
