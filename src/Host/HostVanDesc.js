import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDesc() {
  let van = useOutletContext();
  return (
    <>
      <h4>Name : {van.name}</h4>
      <h4>Type : {van.type}</h4>
      <h4>Description : {van.description}</h4>
      <h4>Visibility : Public</h4>
    </>
  );
}
