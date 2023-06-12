import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Vans from "./Vans/Vans";
import VanDetail from "./Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./Host/Dashboard";
import Review from "./Host/Review";
import Income from "./Host/Income";
import HostLayout from "./components/HostLayout";
import HostVans from "./Host/HostVans";
import HostVansDetail from "./Host/HostVansDetail";
import HostVanDesc from "./Host/HostVanDesc";
import HostVanPrice from "./Host/HostVanPrice";
import HostVanPhoto from "./Host/HostVanPhoto";

import "./server";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<HostVanDesc />} />
              <Route path="pricing" element={<HostVanPrice />} />
              <Route path="photo" element={<HostVanPhoto />} />
            </Route>
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
