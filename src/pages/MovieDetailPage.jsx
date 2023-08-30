import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY, API_URL, MOVIE_CARDIMG, MOVIE_IMG } from "../utils/config";
import axios from "axios";
import { BiUpvote, BiUser } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import MovieCredit from "../components/movies/MovieCredit";
import Heading from "../components/heading/Heading";
import MovieSimilar from "../components/movies/MovieSimilar";
import MovieVideo from "../components/movies/MovieVideo";
/* ====================================================== */

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  // FIX SCROLL BUG
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Fetch movie
  useEffect(() => {
    async function fetchMovies() {
      if (!id) return;
      const res = await axios(`${API_URL}/${id}?api_key=${API_KEY}`);
      const results = res.data;
      setMovie(results);
    }
    fetchMovies();
  }, [id]);

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
    <>
      <section
        className="relative flex items-center justify-center w-full h-screen bg-center bg-no-repeat bg-cover bg-primaryDark"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${MOVIE_IMG}/${backdrop_path})`,
        }}
      >
        <div className="flex items-center justify-between gap-5 page-container">
          <div className="flex flex-col flex-1 mt-10">
            <h1 className="mb-3 text-4xl font-semibold text-saga">{title}</h1>
            <small>{release_date}</small>

            <section className="flex items-center gap-2 my-4">
              {genres &&
                genres.map((item) => (
                  <span
                    className="px-4 py-2 text-sm font-semibold text-black rounded-lg bg-VerdantSaga"
                    key={item.id}
                  >
                    {item.name}
                  </span>
                ))}
            </section>

            <div className="flex flex-wrap items-center gap-3">
              {production_countries &&
                production_countries.map((item) => (
                  <p
                    key={item.name}
                    className="p-2 rounded-sm text-saga bg-primaryDark w-fit "
                  >
                    {item.name}
                  </p>
                ))}
            </div>
            <p className="mt-5 leading-snug">{overview}</p>

            <div className="flex items-center gap-4 mt-5">
              <span className="flex items-center gap-1 px-5 py-3 border rounded-lg border-saga text-saga hover:bg-opacity-10 hover:bg-saga">
                <BiUpvote className="text-xl"></BiUpvote>
                {vote_average}
              </span>
              <span className="flex items-center gap-1 px-5 py-3 border rounded-lg border-saga text-saga hover:bg-opacity-10 hover:bg-saga">
                <BiUser className="text-xl"></BiUser>
                {vote_count}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-5">
              {production_companies &&
                production_companies.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 bg-white w-[100px] rounded-lg"
                  >
                    <img
                      className="object-contain aspect-square"
                      src={`${MOVIE_CARDIMG}/${item.logo_path}`}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="flex-1 w-full h-full">
            <img
              src={`${MOVIE_CARDIMG}/${poster_path}`}
              className="img-cover"
              alt=""
            />
          </div>
        </div>

        {/* Back button */}
        <Link
          to="/"
          className="absolute left-[200px] top-10 flex items-center justify-center rounded-full bg-white text-black  border-saga border cursor-pointer font-bold text-xl w-[45px] h-[45px] hover:bg-opacity-75 "
        >
          <AiOutlineArrowLeft />
        </Link>
      </section>

      <section className="flex flex-col gap-8 page-container">
        {/* Videos */}
        <div className="flex flex-col gap-4 my-10 ">
          <Heading>Videos</Heading>
          <MovieVideo id={id}></MovieVideo>
        </div>

        {/* Credits */}
        <div className="flex flex-col gap-4 my-10 ">
          <Heading>Casts</Heading>
          <MovieCredit id={id}></MovieCredit>
        </div>

        {/* Similar */}
        <div className="flex flex-col gap-4 my-10 ">
          <Heading>Similar movies</Heading>
          <MovieSimilar id={id}></MovieSimilar>
        </div>
      </section>
    </>
  );
};

export default MovieDetailPage;
