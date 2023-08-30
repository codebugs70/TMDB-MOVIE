import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, MOVIE_CARDIMG } from "../../utils/config";
import { Link } from "react-router-dom";

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
    <section className="flex items-center justify-between gap-5">
      {moviesSimilar.length > 0 &&
        moviesSimilar.splice(0, 5).map((item) => {
          return (
            <div key={item.id} className="w-full h-[280px] relative">
              <img
                src={`${MOVIE_CARDIMG}/${item.poster_path}`}
                alt=""
                className="rounded-md img-cover"
              />
              <Link
                to={`/movie/${item.id}`}
                className="absolute bottom-0 flex items-center justify-center w-full py-3 font-semibold text-black transition-all bg-saga hover:bg-VerdantSaga"
              >
                Watch now
              </Link>
            </div>
          );
        })}
    </section>
  );
};

export default MoviePreview;
