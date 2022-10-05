import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import card_img from "../../assets/home/card_img.png";
export default function Footer() {
  return (
    <div className="bg-footer_bg pt-[128px] pb-[40px] text-white lg:pt-[40px]">
      <div className="mx-[80px] sm:mx-[16px]">
        <div className="flex  justify-between lg:flex-col">
          <div className="text-[16px] flex basis-1/3 justify-between sm:flex-wrap ">
            <p className="hover:text-yellow-color cursor-pointer font-medium">
              FAQ
            </p>
            <p className="hover:text-yellow-color cursor-pointer font-medium">
              HELP CENTER
            </p>
            <p className="hover:text-yellow-color cursor-pointer font-medium">
              TERMS OF USE
            </p>
            <p className="hover:text-yellow-color cursor-pointer font-medium">
              PRIVACY
            </p>
          </div>
          <div className=" text-[15px] flex lg:justify-center lg:mt-[15px] ">
            <p className="rounded-full px-[12px] py-[12px] ml-2 bg-black-color hover:text-yellow-color cursor-pointer  ">
              <FaFacebookF />
            </p>
            <p className="rounded-full px-[12px] py-[12px] ml-2 bg-black-color hover:text-yellow-color cursor-pointer  ">
              <FaTwitter />
            </p>
            <p className="rounded-full px-[12px] py-[12px] ml-2 bg-black-color hover:text-yellow-color cursor-pointer  ">
              <FaLinkedinIn />
            </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-black-color shadow-footer my-[40px]"></div>
        <div className="flex justify-between lg:flex-col">
          <div>
            <p className="font-medium text-[16px] mb-[15px] lg:text-center">
              Copyright © 2021. All Rights Reserved By{" "}
              <span className="text-yellow-color cursor-pointer">Movflx</span>{" "}
            </p>
          </div>
          <div>
            <img className="lg:mx-auto" src={card_img}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
