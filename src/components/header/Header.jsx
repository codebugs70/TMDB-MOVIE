import useOnChange from "../../hooks/useOnChange";
import useFetchQueryMovies from "../../hooks/useFetchQueryMovies";
import useActiveHeader from "../../hooks/useActiveHeader";
import React from "react";
import MenuDropdown from "../menu/MenuDropdown";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import MovieSearchItem, {
  MovieSearchItemSkeleton,
} from "../movies/MovieSearchItem";
/* ====================================================== */

const Header = () => {
  const { query, handleChange } = useOnChange();
  const { movies, isLoading } = useFetchQueryMovies(query);
  const { isHeaderActive } = useActiveHeader();

  return (
    <header
      className={`${
        isHeaderActive ? "bg-primaryDark" : ""
      } fixed z-[999] w-full py-4`}
    >
      <div className="flex items-center justify-between page-container">
        <Link to="/" className="text-xl font-semibold md:text-4xl text-linear">
          TMDB MOVIE
        </Link>

        <section className="relative flex items-center w-full max-w-xs gap-2">
          <div className="w-full">
            <input
              value={query}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-white border rounded-full shadow-lg bg-opacity-20 focus:border-saga border-slate-600"
              type="text"
              placeholder="Search movies..."
            />
            {query && (
              <ul className="absolute z-30 bg-darkSaga shadow-lg flex flex-col gap-2 min-w-[380px] right-0 mt-2 rounded-md">
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
