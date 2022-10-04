import React, { lazy, Suspense } from "react";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import Banner from "../components/Home/Banner";
import Gallery from "../components/Home/Gallery";
import Popular from "../components/Home/Popular";
// import TopRate from '../components/Home/TopRate'

const TopRate = lazy(() => import("../components/Home/TopRate"));
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Banner />
      <Popular />
      <Gallery />
      <TopRate />
      <Footer />
    </div>
  );
}
