import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/home/logo.png";
import {
  faSearch,
  faBars,
  faAngleDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, logout } from "../../shared/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { searchSlice } from "../../store/Slice/searchSice";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const navMobileRef = useRef(null);
  const dispath = useDispatch();
  const searchRedux = useSelector((state) => state.search);
  const [search, setSearch] = useState(searchRedux);
  const [mobileMovie, setMobileMovie] = useState(false);
  const [mobileTvShow, setmobileTvShow] = useState(false);
  const [navMobile, setnavMobile] = useState(false);
  const [prevScrollPos, setPreScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const history = useNavigate();
  const [profile, setProfile] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const handleResize = () => {
    if (window.innerWidth > 1000 && navMobile === true) {
      setnavMobile(false);
    }
  };
  const handleSearchRedux = () => {
    dispath(searchSlice.actions.searchFilm(search));
  };
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos < 150) {
      setVisible(true);
    } else {
      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
    setPreScrollPos(currentScrollPos);
  };
  const handleBookmark = (destinationUrl) => {
    if (!user) {
      toast.info("Need login");
      return;
    }
    history(destinationUrl);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  useEffect(() => {
    if (loading) return;
  });
  useEffect(() => {
    const handleClickOutNav = (event) => {
      if (
        navMobileRef.current &&
        !navMobileRef.current.contains(event.target)
      ) {
        setnavMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutNav);
    return () => {
      document.removeEventListener("mousedown", handleClickOutNav);
    };
  }, [navMobileRef]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <div
      className={`block bg-blue-darken navbar w-full z-20    transition-all duration-500 fixed ${
        visible ? "top-0" : "-top-[112px]"
      }`}
    >
      <div
        className={`flex  text-white py-2 px-4 items-center justify-start relative flex-wrap mx-11 lg:justify-around lg:py-5`}
      >
        <div className={`basis-1/8`}>
          <Link className="" to="/">
            <img className="max-w-none" src={logo}></img>
          </Link>
        </div>
        <div className={`basis-3/6  grow lg:hidden`}>
          <div className="flex flex-row flex-wrap basis-3/4">
            <Link className="ml-auto" to="/">
              {" "}
              <p
                className={`${
                  location.pathname === "/" && "text-yellow-color"
                }  ml-auto px-6 py-9 font-bold hover:text-yellow-color cursor-pointer`}
              >
                HOME
              </p>
            </Link>
            <Link to="/movies">
              <p
                className={`${
                  location.pathname === "/movies" && "text-yellow-color"
                } px-6 py-9 font-bold hover:text-yellow-color cursor-pointer`}
              >
                MOVIE
              </p>
            </Link>
            <Link to="/tvshow">
              {" "}
              <p
                className={`px-6 py-9 font-bold hover:text-yellow-color cursor-pointer`}
              >
                TV SHOW
              </p>
            </Link>
            <p onClick={() => handleBookmark("/bookmark")}>
              {" "}
              <p
                className={`px-6 py-9 font-bold hover:text-yellow-color cursor-pointer`}
              >
                BOOKMARK
              </p>
            </p>
          </div>
        </div>
        <div className={`basis-1/6 block  relative`}>
          <div className={`flex  items-center  basis-2/3 relative`}>
            <div className="relative">
              <form className="relative xl:hidden ">
                <input
                  className="bg-black-color pl-5 pr-16 py-3 rounded-[30px] focus:border-yellow-color focus:border-2 focus:outline-none"
                  type="text"
                  placeholder="Find Favorite Movie"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                ></input>
                <Link to="/search">
                  {" "}
                  <button
                    type="submit"
                    className="text-yellow-color cursor-pointer absolute top-1/2 right-6 translate-y-[-50%]"
                    onClick={() => {
                      handleSearchRedux();
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>{" "}
                </Link>
              </form>
            </div>
            <div className="flex items-center ">
              {user ? (
                <div className="relative cursor-pointer ml-5">
                  <p
                    className="w-[50px] h-[50px] bg-white rounded-full header-profile"
                    onClick={() => {
                      {
                        profile ? setProfile(false) : setProfile(true);
                      }
                    }}
                  >
                    <img className="rounded-full" src={user.photoURL}></img>
                  </p>
                  <div className="w-[95px] h-[30px] absolute left-1/2 -translate-x-1/2 "></div>
                  <div
                    className={`bg-blue-darken absolute -left-1/2 -translate-x-1/2 mt-4 transition-all duration-500 overflow-hidden ${
                      profile ? "max-h-24" : "max-h-0"
                    }`}
                  >
                    <div className="border-yellow-color border px-2 py-3 rounded-md ">
                      <p className="">{user.email}</p>
                      <p
                        className="w-full  mt-4"
                        onClick={() => {
                          logout(auth);
                        }}
                      >
                        Log out
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/auth">
                  <p
                    className={`w-32 py-2 font-bold px-6 bg-black-color rounded-full border-2 cursor-pointer border-[#e4d804] hover:text-black-color hover:bg-yellow-color ml-9 md:hidden text-center`}
                  >
                    SIGN IN
                  </p>
                </Link>
              )}
              <p
                className="ml-8 text-3xl cursor-pointer min-xl:hidden "
                onClick={() => {
                  navMobile === true ? setnavMobile(false) : setnavMobile(true);
                }}
              >
                <FontAwesomeIcon icon={faBars} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={navMobileRef}
        className={`fixed text-white z-40 top-0 right-0 w-[300px] h-[100vh] bg-[#171d22] overflow-x-hidden transition-all duration-1000 ${
          navMobile === true ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div>
          <div className="px-6 py-8 flex justify-between items-center">
            <Link to="/">
              {" "}
              <img className="max-w-none" src={logo}></img>{" "}
            </Link>
            <p
              className="text-xl font-bold cursor-pointer"
              onClick={() => {
                navMobile === true ? setnavMobile(false) : setnavMobile(true);
              }}
            >
              <FontAwesomeIcon className="font-black" icon={faTimes} />
            </p>
          </div>
          <div>
            <p className="flex px-7 py-3 border-t-[1px] border-[#ffffff1a]">
              <Link to="/">
                {" "}
                <p className="mr-32">Home</p>
              </Link>
            </p>
            <p className="flex px-7 py-3 border-t-[1px] border-[#ffffff1a]">
              <Link to="/movies">
                {" "}
                <p>Movie</p>
              </Link>
              <p
                className="bg-blue-darken w-8 h-8 leading-8 text-center ml-auto"
                onClick={() =>
                  mobileMovie === true
                    ? setMobileMovie(false)
                    : setMobileMovie(true)
                }
              >
                <FontAwesomeIcon icon={faAngleDown} />
              </p>
            </p>
            <p
              className={`  overflow-hidden test ${
                mobileMovie === true ? " max-h-24 " : "max-h-0 "
              }`}
            >
              <Link to="/movies">
                {" "}
                <p className="px-14 py-3 border-t-[1px] border-[#ffffff1a]">
                  Movie
                </p>
              </Link>
              <p className="px-14 border-t-[1px] border-[#ffffff1a] px-7 py-3">
                Movie Details
              </p>
            </p>

            <p className="flex px-7 py-3 border-t-[1px] border-[#ffffff1a]">
              <Link to="/movies">
                {" "}
                <p className="mr-32">Tv Show</p>
              </Link>
              <p
                className="bg-blue-darken w-8 h-8 leading-8 text-center ml-auto"
                onClick={() => {
                  mobileTvShow === true
                    ? setmobileTvShow(false)
                    : setmobileTvShow(true);
                }}
              >
                <FontAwesomeIcon icon={faAngleDown} />
              </p>
            </p>
            <p
              className={` overflow-hidden test ${
                mobileTvShow === true ? " max-h-24 " : "max-h-0 "
              }`}
            >
              <p className="px-14 py-3 border-t-[1px] border-[#ffffff1a] ">
                Tv Show
              </p>
              <p className="px-14 border-t-[1px] border-[#ffffff1a] px-7 py-3">
                Tv Show Details
              </p>
            </p>

            <p
              className="flex px-7 py-3 border-t-[1px] border-[#ffffff1a] cursor-pointer"
              onClick={() => handleBookmark("/bookmark")}
            >
              Book Mark
            </p>
            {user && (
              <p className="flex px-7 py-3 border-t-[1px] border-[#ffffff1a] cursor-pointer">
                {user.email}
              </p>
            )}
            <p className="flex px-7 py-3 border-t-[1px] border-[#ffffff1a] cursor-pointer">
              {user ? (
                <p
                  onClick={() => {
                    logout(auth);
                  }}
                >
                  Log Out
                </p>
              ) : (
                <Link to="/auth">
                  <p>Sign In</p>
                </Link>
              )}
            </p>
          </div>
          <div className="px-6 py-8 border-t-[1px] border-[#ffffff1a]">
            <p>Social</p>
          </div>
        </div>
      </div>
      <div
        className={`h-[100vh] w-full bg-[rgba(23,29,34,0.8)] fixed top-0 z-30  ${
          navMobile ? "" : "hidden"
        }`}
      ></div>
    </div>
  );
}
