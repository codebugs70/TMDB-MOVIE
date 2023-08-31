import useFetchMoviesType from "../../hooks/useFetchMoviesType";
import React from "react";
import PropTypes from "prop-types";
import MovieItem, { MovieItemSkeleton } from "./MovieItem";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
/* ====================================================== */

const MovieList = ({ type }) => {
  const { movies, isLoading } = useFetchMoviesType(type);

  return (
    <section>
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
          Array(15)
            .fill(0)
            .map(() => (
              <SwiperSlide key={v4()}>
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
    </section>
  );
};

/* Add PropsTypes */
MovieList.propTypes = {
  type: PropTypes.string,
};

export default MovieList;
