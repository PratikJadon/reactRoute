import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhoto() {
  let van = useOutletContext();
  return (
    <>
      <img className="host--vansdetail--photo" src={van.imageUrl} />
    </>
  );
}
