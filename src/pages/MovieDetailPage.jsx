import useFetchMovieID from "../hooks/useFetchMovieID";
import React from "react";
import MovieVideo from "../components/movies/MovieVideo";
import MovieSimilar from "../components/movies/MovieSimilar";
import MovieProduction from "../components/movies/MovieProduction";
import MoviePoster from "../components/movies/MoviePoster";
import MovieGenres from "../components/movies/MovieGenres";
import MovieCredit from "../components/movies/MovieCredit";
import MovieCompany from "../components/movies/MovieCompany";
import Heading from "../components/heading/Heading";
import Button from "../components/button/Button";
import { useEffect } from "react";
import { MOVIE_IMG } from "../utils/config";
import { Link, useParams } from "react-router-dom";
import { BiUpvote, BiUser } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
/* ====================================================== */

const MovieDetailPage = () => {
  const { id } = useParams();
  const { movie } = useFetchMovieID(id);

  // FIX SCROLL BUG
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Destruct
  const {
    title,
    genres,
    release_date,
    overview,
    backdrop_path,
    vote_average,
    poster_path,
    vote_count,
    production_countries,
    production_companies,
  } = movie;

  return (
    <main>
      <section
        className="relative flex items-center justify-center w-full h-screen bg-center bg-no-repeat bg-cover bg-primaryDark"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${MOVIE_IMG}/${backdrop_path})`,
        }}
      >
        <div className="flex items-center justify-between gap-5 page-container">
          <section className="flex flex-col flex-1 mt-10">
            <h1 className="mb-3 text-4xl font-semibold text-saga">{title}</h1>
            <small>{release_date}</small>
            <MovieGenres data={genres}></MovieGenres>
            <MovieProduction data={production_countries}></MovieProduction>
            <p className="mt-5 leading-snug">{overview}</p>

            {/* Vote & View */}
            <div className="flex items-center gap-4 mt-5">
              <Button variant="secondary" size="base">
                <BiUpvote className="text-lg"></BiUpvote>
                {vote_average}
              </Button>
              <Button variant="secondary" size="base">
                <BiUser className="text-lg"></BiUser>
                {vote_count}
              </Button>
            </div>
            <MovieCompany data={production_companies}></MovieCompany>
          </section>
          <MoviePoster poster={poster_path}></MoviePoster>
        </div>

        {/* Back button */}
        <Link
          to="/"
          className="absolute md:left-10 left-5 xl:left-[200px] top-5 md:top-10 flex items-center justify-center rounded-full bg-white text-black  border-saga border cursor-pointer font-bold text-xl w-[45px] h-[45px] hover:bg-opacity-75 "
        >
          <AiOutlineArrowLeft />
        </Link>
      </section>

      <section className="flex flex-col md:gap-8 page-container">
        {/* Videos */}
        <div className="flex flex-col gap-4 my-5 md:my-10 ">
          <Heading>Videos</Heading>
          <MovieVideo id={id}></MovieVideo>
        </div>

        {/* Credits */}
        <div className="flex flex-col gap-4 my-5 md:my-10 ">
          <Heading>Casts</Heading>
          <MovieCredit id={id}></MovieCredit>
        </div>

        {/* Similar */}
        <div className="flex flex-col gap-4 my-5 md:my-10 ">
          <Heading>Similar movies</Heading>
          <MovieSimilar id={id}></MovieSimilar>
        </div>
      </section>
    </main>
  );
};

export default MovieDetailPage;
