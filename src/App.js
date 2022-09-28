import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Movie from './pages/Movie';
// import Search from "./pages/Search";
// import Tvshow from "./pages/Tvshow";
import Auth from "./pages/Auth";
import BookMark from "./pages/BookMark";
import FilmDetail from "./pages/FilmDetail";

const Movie = lazy(() => import("./pages/Movie"));
const Home = lazy(() => import("./pages/Home"));
const Tvshow = lazy(() => import("./pages/Tvshow"));
const Search = lazy(() => import("./pages/Search"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[100vh] bg-blue-darken  pt-[30vh] ">
          <div className="loading box-border w-[300px] h-[300px] border-black-color rounded-full border-[15px] border-t-yellow-color animate-spin-slow mx-auto "></div>
        </div>
      }
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="search" element={<Search />} />
        <Route path="tvshow" element={<Tvshow />} />
        <Route path="auth" element={<Auth />} />
        <Route path="bookmark" element={<BookMark />} />
        <Route path="search" element={<Search />} />
        <Route path="/:id" element={<FilmDetail />} />
      </Routes>
    </Suspense>
  );
}

export default App;
