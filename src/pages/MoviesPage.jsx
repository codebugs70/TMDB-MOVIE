import React from "react";
import Header from "../components/header/Header";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import { API_KEY, API_SEARCH_QUERY, API_URL } from "../utils/config";
import axios from "axios";
import MovieItem, { MovieItemSkeleton } from "../components/movies/MovieItem";
import { v4 } from "uuid";
import ReactPaginate from "react-paginate";
/* ====================================================== */

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        let apiUrl = `${API_URL}/now_playing?api_key=${API_KEY}&page=${1}`;

        if (searchVal !== "") {
          apiUrl = `${API_SEARCH_QUERY}?api_key=${API_KEY}&query=${searchVal}`;
        }

        const res = await axios(apiUrl);
        const results = res.data.results;
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [searchVal]);

  return (
    <section>
      <Header></Header>

      <div className="pt-[120px] page-container ">
        <section className="flex items-center w-full gap-1">
          <input
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            type="text"
            placeholder="Search movies..."
            className="w-full p-3 text-sm text-white border border-transparent rounded-md bg-darkSaga focus-within:border-saga"
          />
          <span className="w-[50px] h-[45px] text-xl hover:text-saga rounded-md cursor-pointer flex items-center justify-center bg-darkSaga">
            <BiSearch></BiSearch>
          </span>
        </section>

        <ul className="grid grid-cols-4 gap-5 my-10 ">
          {isLoading &&
            Array(6)
              .fill(0)
              .map((item, index) => (
                <MovieItemSkeleton key={index}></MovieItemSkeleton>
              ))}

          {!isLoading &&
            movies.length > 0 &&
            movies.map((item) => {
              return <MovieItem key={v4()} data={item}></MovieItem>;
            })}
        </ul>
      </div>
    </section>
  );
};

export default MoviesPage;
