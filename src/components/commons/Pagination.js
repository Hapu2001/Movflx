import React from "react";

export default function Pagination({
  handlePrePage,
  setCurrentPage,
  handleNextPage,
  pagesNumber,
  maxPageNumberLimit,
  minPageNumberLimit,
  currentPage,
}) {
  return (
    <div className={`flex justify-center my-10 `}>
      <button
        className={`btn-pagnination cursor-pointer ${
          currentPage === pagesNumber[0] &&
          "opacity-60 cursor-default hover:bg-black hover:text-white hover:border-white"
        }`}
        onClick={() => {
          handlePrePage();
        }}
        disabled={currentPage === pagesNumber[0] ? true : false}
      >
        Previous
      </button>
      <div className="flex">
        {pagesNumber.map((item) => {
          if (
            (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) ||
            pagesNumber.length == 2
          )
            return (
              <p
                className={`${
                  item === currentPage
                    ? "bg-yellow-color text-black border-yellow-color"
                    : ""
                } btn-pagnination cursor-pointer `}
                onClick={() => {
                  setCurrentPage(item);
                }}
                key={item}
              >
                {item}
              </p>
            );
        })}
      </div>

      <button
        className={`btn-pagnination cursor-pointer ${
          currentPage === pagesNumber[pagesNumber.length - 1] &&
          "opacity-60 cursor-default  hover:bg-black hover:text-white hover:border-white"
        }`}
        onClick={handleNextPage}
        disabled={
          currentPage === pagesNumber[pagesNumber.length - 1] ? true : false
        }
      >
        Next
      </button>
    </div>
  );
}
