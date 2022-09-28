import React, { Suspense } from "react";
import BannerDetail from "../components/commons/BannerDetail";
import Navbar from "../components/commons/Navbar";
import Banner from "../components/Home/Banner";
import TVshowListFIlm from "../components/TVshow/TVshowListFIlm";

export default function Tvshow() {
  return (
    <div>
      <Navbar />
      <div className="bg-toprate_bg h-[88px] lg:h-[66px] w-full"></div>
      <div className="bg-movie_banner banner  bg-cover bg-center pt-[230px] pb-[170px] relative text-white relative  ">
        <div className="text-center relative z-5">
          <p className="text-6xl font-bold mb-2">
            Our <span className="text-yellow-color">TV Show</span>{" "}
          </p>
          <p className="font-bold ">
            {" "}
            <span className="text-yellow-color">HOME</span> | TV Show
          </p>
        </div>
      </div>
      <TVshowListFIlm />
    </div>
  );
}
