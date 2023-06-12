import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPrice() {
  let van = useOutletContext();
  return <p className="host--vandetail--price">${van.price}/day</p>;
}
