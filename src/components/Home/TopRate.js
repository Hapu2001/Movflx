import React, { useEffect, useState } from "react";
import request from "../../shared/Requests";
import axios from "axios";
import CardFilm from "../commons/CardFilm";
import Pagination from "../commons/Pagination";
import { useDispatch } from "react-redux";
import { usersSlice } from "../../store/Slice/UserSlice";

export default function TopRate() {
  const axios = require("axios");
  const dispath = useDispatch();
  const handleAdd = (item) => {
    dispath(usersSlice.actions.addBookmark(item));
  };
  const deleteBook = (id) => {
    dispath(usersSlice.actions.deleteBookmark(id));
  };
  const [toprated, setToprated] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(2);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(2);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const itemsPerPage = 5;
  const pagesNumber = [];
  useEffect(() => {
    axios
      .get(request.requestTopRated)
      .then((res) => {
        setToprated(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [request.requestTopRated]);

  for (let i = 1; i <= Math.ceil(toprated.length / itemsPerPage); i++) {
    pagesNumber.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFilm = toprated.slice(indexOfFirstItem, indexOfLastItem);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrePage = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div className="bg-toprate_bg text-white py-32 ">
      <div className="text-center font-bold toprate-header relative mb-20">
        <p className="text-xs mb-3">TOP RATED MOVIES</p>
        <p className="text-4xl">Top Online Shows Watch</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {currentFilm.map((item) => {
          return (
            <div className="mb-5 md:basis-1/2" key={item.id}>
              <CardFilm
                handleAdd={handleAdd}
                deleteBook={deleteBook}
                item={item}
              />
            </div>
          );
        })}
      </div>
      <div>
        <Pagination
          handlePrePage={handlePrePage}
          setCurrentPage={setCurrentPage}
          handleNextPage={handleNextPage}
          pagesNumber={pagesNumber}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
