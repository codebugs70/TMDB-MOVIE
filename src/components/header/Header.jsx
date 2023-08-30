import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_KEY, API_SEARCH_QUERY, MOVIE_CARDIMG } from "../../utils/config";
import { Link } from "react-router-dom";
import MenuDropdown from "../menu/MenuDropdown";
import MovieSearchItem, {
  MovieSearchItemSkeleton,
} from "../movies/MovieSearchItem";
import { v4 } from "uuid";
/* ====================================================== */

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Search query
  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      if (!searchVal) return;
      const res = await axios(
        `${API_SEARCH_QUERY}?api_key=${API_KEY}&query=${searchVal}`
      );
      const results = res.data.results;
      setMovies(results);
      setIsLoading(false);
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
    <header
      className={`${
        isHeaderActive ? "bg-primaryDark" : ""
      } fixed z-40 w-full py-4`}
    >
      <div className="flex items-center justify-between page-container">
        <h1 className="text-4xl font-semibold text-linear">TMDB-MOVIE</h1>

        <section className="relative flex items-center w-full max-w-xs gap-2">
          <div className="w-full">
            <input
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full px-4 py-3 text-sm bg-white border rounded-full shadow-lg bg-opacity-20 focus:border-saga border-slate-600"
              type="text"
              placeholder="Search movies..."
            />
            {searchVal && (
              <ul className="absolute  z-30 bg-darkSaga flex flex-col gap-2 min-w-[380px] right-0 mt-2 rounded-md">
                {isLoading &&
                  Array(5)
                    .fill(0)
                    .map((item, index) => (
                      <MovieSearchItemSkeleton
                        key={index}
                      ></MovieSearchItemSkeleton>
                    ))}

                {!isLoading &&
                  movies.length > 0 &&
                  movies
                    .splice(0, 5)
                    .map((item) => (
                      <MovieSearchItem key={v4()} item={item}></MovieSearchItem>
                    ))}
              </ul>
            )}
          </div>
          <MenuDropdown></MenuDropdown>
        </section>
      </div>
    </header>
  );
};

export default Header;
