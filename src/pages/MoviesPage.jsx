import useOnChange from "../hooks/useOnChange";
import useFetchSearchMovies from "../hooks/useFetchSearchMovies";
import ReactPaginate from "react-paginate";
import React from "react";
import MovieItem, { MovieItemSkeleton } from "../components/movies/MovieItem";
import Header from "../components/header/Header";
import { v4 } from "uuid";
import { useState } from "react";
import Searchbar from "../components/search/Searchbar";
/* ====================================================== */

const MoviesPage = () => {
  const [nextPage, setNextPage] = useState(1);
  const { query, handleChange } = useOnChange();
  const { movies, isLoading, pageCount } = useFetchSearchMovies(
    query,
    nextPage
  );

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
  };

  return (
    <section>
      <Header></Header>

      <div className="pt-[120px] page-container ">
        <Searchbar value={query} onChange={handleChange}></Searchbar>

        {/* Render movies */}
        <ul className="grid grid-cols-2 gap-5 my-10 md:grid-cols-3 xl:grid-cols-4 ">
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
