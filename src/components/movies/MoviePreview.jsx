import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, MOVIE_CARDIMG } from "../../utils/config";
import { Link } from "react-router-dom";
import altImg from "/error-movie.jpg";
import MovieItem from "./MovieItem";
import { v4 } from "uuid";
/* ====================================================== */

const MoviePreview = ({ movieId }) => {
  const [moviesSimilar, setMoviesSmiliar] = useState([]);

  useEffect(() => {
    async function fetchMoviesSimilar() {
      const res = await axios(
        `${API_URL}/${movieId}/similar?api_key=${API_KEY}`
      );
      const results = res.data.results;
      setMoviesSmiliar(results);
    }
    fetchMoviesSimilar();
  }, [movieId]);

  if (!movieId) return null;
  return (
    <section className="flex items-center justify-between gap-3">
      {moviesSimilar.length > 0 &&
        moviesSimilar.splice(0, 5).map((item) => {
          return (
            <MovieItem
              imageHeight="h-[260px] w-[230px]"
              key={v4()}
              data={item}
            ></MovieItem>
          );
        })}
    </section>
  );
};

export default MoviePreview;
