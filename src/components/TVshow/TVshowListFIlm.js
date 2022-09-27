import React, { useEffect, useState } from "react";
import request from "../../shared/Requests";
import axios from "axios";
import CardFilm from "../commons/CardFilm";
import Filter from "../commons/Filter";
export default function TVshowListFIlm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortRate, setSortRate] = useState("popular");
  const requestMoviePopular = `https://api.themoviedb.org/3/tv/${sortRate}?api_key=6cd3158a79f8308025968b023f2a09cf&language=en-US&page=${currentPage}`;
  const genresAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=6cd3158a79f8308025968b023f2a09cf&language=en-US`;
  const [popularTV, setPopularTV] = useState([]);
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
    window.scrollTo({ top: 300 });
  }, [idGenres]);
  return (
    <div className="bg-toprate_bg text-white py-12">
      <div className="mx-6">
        <div className="flex sm:flex-wrap sm:justify-center">
          <div className="basis-1/6 sm:basis-full">
            <Filter
              genres={genres}
              setIdGenres={setIdGenres}
              idGenres={idGenres}
              addGenres={addGenres}
              setSortRate={setSortRate}
            />
          </div>
          <div className=" basis-5/6  ">
            <div className="flex flex-wrap justify-center">
              {idGenres.length === 0
                ? popularTV.map((item) => {
                    return (
                      <div className="mb-5" key={item.id}>
                        <CardFilm item={item} />
                      </div>
                    );
                  })
                : popularTV.map((item) => {
                    if (applyFilers(item, idGenres)) {
                      return (
                        <div className="mb-5" key={item.id}>
                          <CardFilm item={item} />
                        </div>
                      );
                    }
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