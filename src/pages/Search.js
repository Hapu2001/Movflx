import axios from "axios";
import React, { useState, useEffect, lazy, Suspense } from "react";
import CardFilm from "../components/commons/CardFilm";
import Navbar from "../components/commons/Navbar";
import { useSearchParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import Footer from "../components/commons/Footer";
export default function Search() {
  const searchRedux = useSelector((state) => state.search);

  const requestSearch = `https://api.themoviedb.org/3/search/movie?api_key=6cd3158a79f8308025968b023f2a09cf&language=en-US&page=1&include_adult=false&query=${searchRedux}`;
  const [listSearch, setListSearch] = useState([]);
  useEffect(() => {
    try {
      axios.get(requestSearch).then((res) => {
        setListSearch(res.data.results);
      });
    } catch (e) {
      console.log(e);
    }
  }, [requestSearch, listSearch]);

  console.log(listSearch);

  return (
    <div
      className={`bg-home_bg02 mt-[82px] ${
        listSearch.length > 0 ? "h-auto" : "h-screen"
      } pt-10 pb-10 lg:mt-[60px]`}
    >
      <Navbar />
      <div className="flex flex-wrap justify-center">
        {listSearch.map((item) => {
          return (
            <div className="mb-5 md:basis-1/2" key={item.id}>
              <CardFilm item={item} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
