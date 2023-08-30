import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_KEY, API_SEARCH_QUERY, MOVIE_CARDIMG } from "../../utils/config";
import { Link } from "react-router-dom";
/* ====================================================== */

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [movies, setMovies] = useState([]);

  // Search query
  useEffect(() => {
    async function fetchMovies() {
      if (!searchVal) return;
      const res = await axios(
        `${API_SEARCH_QUERY}?api_key=${API_KEY}&query=${searchVal}`
      );
      const results = res.data.results;
      setMovies(results);
    }
    fetchMovies();
  }, [searchVal]);

  // Apply background to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          isHeaderActive ? "bg-darkGraphite" : ""
        } fixed z-40 w-full py-4`}
      >
        <div className="flex items-center justify-between page-container">
          <h1 className="text-4xl font-semibold text-white">TMDB-MOVIE</h1>

          <div className="relative w-full max-w-xs">
            <input
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full px-4 py-3 text-sm bg-white border rounded-full shadow-lg bg-opacity-20 focus:border-saga border-slate-600"
              type="text"
              placeholder="Search movies..."
            />
            {searchVal && (
              <ul className="absolute  z-30 bg-darkSaga flex flex-col gap-2 min-w-[380px] right-0 mt-2 rounded-md">
                {movies.length > 0 &&
                  movies.splice(0, 5).map((item) => (
                    <Link
                      to={`/movie/${item.id}`}
                      key={item.id}
                      className="flex items-start gap-4 p-2 hover:bg-white hover:bg-opacity-10"
                    >
                      <div className="aspect-square h-[70px]">
                        <img
                          src={`${MOVIE_CARDIMG}/${item.poster_path}`}
                          className="rounded-md img-cover"
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-sm text-saga line-clamp-2">
                          {item.title}
                        </h1>
                        <p className="mt-1 text-xs line-clamp-2">
                          {item.overview}
                        </p>
                      </div>
                    </Link>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
