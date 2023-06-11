import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Vans from "./Vans/Vans";
import VanDetail from "./Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./Host/Dashboard";
import Review from "./Host/Review";
import Income from "./Host/Income";
import "./server";
import HostLayout from "./components/HostLayout";

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
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
