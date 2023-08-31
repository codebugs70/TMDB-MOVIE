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

const ITEM_PER_PAGE = 20;

const MoviesPage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);

  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log(nextPage);

  /* Fetch movies */
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        let apiUrl = `${API_URL}/now_playing?api_key=${API_KEY}&page=${nextPage}`;

        if (searchVal !== "") {
          apiUrl = `${API_SEARCH_QUERY}?api_key=${API_KEY}&query=${searchVal}&page=${nextPage}`;
        }
        const res = await axios(apiUrl);

        const totalPages = res.data.total_pages;
        if (totalPages) setPageCount(totalPages);

        const results = res.data.results;
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [nextPage, searchVal]);

  /* Handle click page */
  const handlePageClick = (event) => {
    const newOffset = event.selected * ITEM_PER_PAGE;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <section>
      <Header></Header>

      <div className="pt-[120px] page-container ">
        {/* Search */}
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

        {/* Render movies */}
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

        {/* Pagination */}
        <section className="my-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </section>
      </div>
    </section>
  );
};

export default MoviesPage;
