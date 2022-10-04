import React, { useEffect, useState, useRef } from "react";
import request from "../../shared/Requests";
import axios from "axios";
import Slider from "react-slick";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function Gallery() {
  const axios = require("axios");
  const sliderRef = useRef();
  const [upcoming, setUpcoming] = useState([]);
  const [slideindex, setSlideindex] = useState(0);
  const settings = {
    speed: 2000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, newIndex) => setSlideindex(newIndex),
    centerMode: true,
    centerPadding: "250px",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerPadding: "5px",
        },
      },
    ],
  };
  useEffect(() => {
    axios
      .get(request.requestUpcomming)
      .then(function (res) {
        setUpcoming(res.data.results);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [request.requestUpcomming]);

  return (
    <div className="bg-gallery_bg w-full py-32 relative">
      <div className=" w-full  ">
        <Slider ref={sliderRef} {...settings}>
          {upcoming.map((item, index) => {
            return (
              <div
                key={item.id}
                className={` px-7 opacity-100 transition-all duration-1000  ${
                  index === slideindex ? "slide-active" : "opacity-10  mt-20"
                }`}
              >
                <img
                  className=""
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                ></img>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="flex mx-60  justify-between text-white sm:mx-10">
        <p
          className="font-bold hover:text-yellow-color hover:cursor-pointer "
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FontAwesomeIcon className="mx-2 " icon={faCaretLeft} /> PREVIOUS
        </p>
        <p
          className="font-bold hover:text-yellow-color hover:cursor-pointer "
          onClick={() => sliderRef.current.slickNext()}
        >
          NEXT
          <FontAwesomeIcon className="mx-2" icon={faCaretRight} />
        </p>
      </div>
    </div>
  );
}
