import React, { useState } from "react";
import Select from "react-select";
export default function Filter({
  genres,
  setIdGenres,
  idGenres,
  addGenres,
  setSortRate,
  handleFilerDate,
  setSearch,
  search,
}) {
  const [value, setValue] = useState({
    label: "Most Popular",
    value: "Popular",
  });
  const options = [
    { value: "popular", label: "Most Popular" },
    { value: "top_rated", label: "Most rating" },
  ];
  const customStyles = {
    option: (styles: any, { isSelected }: any) => ({
      ...styles,
      backgroundColor: isSelected ? "#252631" : "#12151e",
    }),
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#12151e",
      boxShadow: "none",
      border: 0,
    }),
    singleValue: (provided, state) => {
      return { ...provided, color: "white" };
    },
    menu: (styles: any) => ({
      ...styles,

      backgroundColor: "#12151e",
    }),
  };
  const checkdate = (e) => {
    console.log(e);
  };
  const handleVaule = (options) => {
    setSortRate(options.value);
    setValue(options);
  };
  return (
    <div>
      <div className="bg-yellow-color text-black rounded-md px-4 py-3 mb-8">
        <div>Sort</div>
        <div className="bg-black h-[1px] mb-3"></div>
        <div>Sort results by</div>
        <div className="text-white ">
          <Select
            onChange={handleVaule}
            styles={customStyles}
            options={options}
            defaultValue={{ label: "Most Popular", value: "Popular" }}
          />
        </div>
      </div>
      <div className="bg-yellow-color text-black rounded-md px-4 py-3">
        <div>Filter</div>
        <div>
          <div>Genres</div>
          <div className="bg-black h-[1px] mb-3"></div>
          <div className="flex flex-wrap">
            {genres.map((item) => {
              return (
                <p
                  className={`btn py-2 px-4 mb-1 mr-1 text-white ${
                    idGenres.includes(item.id)
                      ? "bg-yellow-color text-black"
                      : ""
                  }`}
                  key={item.id}
                  onClick={() => {
                    addGenres(item.id);
                  }}
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="mt-3">
          <div>Release Dates</div>
          <div className="bg-black h-[1px] mb-3"></div>
          <div className="flex justify-between mb-5">
            <div>From</div>
            <input
              className="text-black px-3 rounded-md"
              id="from"
              name="from"
              onChange={(e) => {
                handleFilerDate(e);
              }}
              type="date"
              defaultValue="2002-11-04"
            ></input>
          </div>
          <div className="flex justify-between">
            <label>To</label>
            <input
              className="text-black  px-3 rounded-md"
              type="date"
              defaultValue="2022-09-02"
              id="to"
              name="to"
              onChange={(e) => {
                handleFilerDate(e);
              }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
