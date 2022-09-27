import React, { useEffect, useState } from "react";
import request from "../../shared/Requests";
import axios from "axios";
import CardFilm from "./CardFilm";
import Filter from "./Filter";
import { useSearchParams } from "react-router-dom";
export default function ListFilm() {
  const [search, setSearch] = useState({
    genres: [],
    from: [],
    to: [],
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilerDate = (e) => {
    if (e.target.name === "from") {
      setSearch({ ...search, from: e.target.value });
    } else {
      setSearch({ ...search, to: e.target.value });
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [sortRate, setSortRate] = useState("popular");

  const requestMoviePopular = `https://api.themoviedb.org/3/movie/${sortRate}?api_key=6cd3158a79f8308025968b023f2a09cf&language=en-US&page=${currentPage}`;
  const requestDiscoverReleaseDate = `https://api.themoviedb.org/3/discover/movie?api_key=6cd3158a79f8308025968b023f2a09cf&page=1&release_date.gte=${search.from}&release_date.lte=${search.to}&with_genres=${search.genres}`;
  const genresAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=6cd3158a79f8308025968b023f2a09cf&language=en-US`;
  const [popularTV, setPopularTV] = useState([]);
  const [discoverMovie, setDiscoverMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [idGenres, setIdGenres] = useState([]);
  useEffect(() => {
    axios.get(requestMoviePopular).then((res) => {
      setPopularTV(res.data.results);
      if (currentPage === 1) {
        setPopularTV(res.data.results);
      } else {
        let virtualResData = [...res.data.results];
        let virtualPopular = [...popularTV];
        for (let i = 0; i < virtualResData.length; i++) {
          virtualPopular.push(virtualResData[i]);
        }
        setPopularTV(virtualPopular);
      }
    });
    axios.get(genresAPI).then((res) => {
      setGenres(res.data.genres);
    });
  }, [requestMoviePopular, sortRate]);
  const addGenres = (genres) => {
    let tam = [...idGenres];
    const exist = tam.includes(genres);
    if (exist) {
      tam = tam.filter((e) => e !== genres);
    } else {
      tam.push(genres);
    }
    setIdGenres(tam);
    setSearch({ ...search, genres: tam });
  };
  const applyFilers = (film, idGenres) => {
    for (let i = 0; i < film.genre_ids.length; i++) {
      for (let j = 0; j < idGenres.length; j++) {
        if (film.genre_ids[i] === idGenres[j]) {
          return true;
        }
      }
    }
    return false;
  };

  useEffect(() => {
    window.scrollTo({ top: 500 });
  }, [search]);
  useEffect(() => {
    axios.get(requestDiscoverReleaseDate).then((res) => {
      setDiscoverMovie(res.data.results);
      console.log(requestDiscoverReleaseDate);
    });
    setSearchParams({ ...search });
  }, [search, requestDiscoverReleaseDate]);

  return (
    <div className="bg-toprate_bg text-white py-12">
      <div className="mx-6">
        <div className="flex sm:flex-wrap sm:justify-center">
          <div className="basis-1/6 sm:basis-full">
            <Filter
              handleFilerDate={handleFilerDate}
              genres={genres}
              setIdGenres={setIdGenres}
              idGenres={idGenres}
              addGenres={addGenres}
              setSortRate={setSortRate}
              setSearch={setSearch}
              search={search}
            />
          </div>
          <div className=" basis-5/6  ">
            <div className="flex flex-wrap justify-center">
              {discoverMovie.map((item) => {
                return (
                  <div className="mb-5" key={item.id}>
                    <CardFilm item={item} />
                  </div>
                );
              })}
            </div>
            <div>
              {" "}
              <p
                className="btn bg-yellow-color text-xs border-yellow-color text-black hover:bg-black-color  hover:text-white text-center mx-auto w-36"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >
                Load More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
