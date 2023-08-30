import React from "react";
import { useState } from "react";
import { API_KEY, API_URL, MOVIE_CARDIMG } from "../../utils/config";
import { useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MovieItem from "./MovieItem";
import { v4 } from "uuid";
/* ====================================================== */

const MovieSimilar = ({ id }) => {
  const [moviesSimilar, setMoviesSmiliar] = useState([]);

  // Fetch movie
  useEffect(() => {
    async function fetchMovies() {
      if (!id) return;
      const res = await axios(`${API_URL}/${id}/similar?api_key=${API_KEY}`);
      const results = res.data.results;
      setMoviesSmiliar(results);
    }
    fetchMovies();
  }, [id]);

  return (
    <ul>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {moviesSimilar.length > 0 &&
          moviesSimilar.map((item) => (
            <SwiperSlide key={v4()}>
              <MovieItem data={item}></MovieItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </ul>
  );
};

export default MovieSimilar;
