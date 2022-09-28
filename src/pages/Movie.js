import React from "react";
import BannerDetail from "../components/commons/BannerDetail";
import ListFilm from "../components/commons/ListFilm";
import Navbar from "../components/commons/Navbar";

export default function Movie() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="bg-toprate_bg h-[88px] lg:h-[66px] w-full"></div>
      <BannerDetail />
      <ListFilm />
    </div>
  );
}
