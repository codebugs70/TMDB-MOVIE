import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { v4 } from "uuid";
import { API_KEY, API_URL } from "../../utils/config";
import MovieItem, { MovieItemSkeleton } from "./MovieItem";
/* ====================================================== */

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      if (!category) return;
      try {
        const res = await axios(`${API_URL}/${category}?api_key=${API_KEY}`);
        const results = res.data.results;
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [category]);

  return (
    <div>
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
        {isLoading &&
          Array(20)
            .fill(0)
            .map((item, index) => (
              <SwiperSlide key={index}>
                <MovieItemSkeleton></MovieItemSkeleton>
              </SwiperSlide>
            ))}

        {!isLoading &&
          movies.length > 0 &&
          movies.map((item) => {
            return (
              <SwiperSlide key={v4()}>
                <MovieItem data={item}></MovieItem>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default MovieList;
