import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_KEY, API_URL, MOVIE_IMG } from "../../utils/config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { v4 } from "uuid";
import Button from "../button/Button";
import { BsPlayCircle } from "react-icons/bs";
import MoviePreview from "../movies/MoviePreview";
/* ====================================================== */

const Banner = () => {
  const [moviesBanner, setMoviesBanner] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await axios(`${API_URL}/now_playing?api_key=${API_KEY}`);
      const results = res.data.results;
      setMoviesBanner(results);
    }
    fetchMovies();
  }, []);

  return (
    <section className="relative">
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {moviesBanner.length > 0 &&
          moviesBanner.map((item) => {
            return (
              <SwiperSlide key={v4()}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.3)]"></div>
                  <img
                    className="object-cover w-full h-screen"
                    src={`${MOVIE_IMG}/${item.poster_path}`}
                    alt=""
                  />

                  <div className="absolute w-full max-w-lg top-2/4 xl:top-[150px] left-0 md:left-[150px] px-5">
                    <h1 className="text-4xl font-semibold text-saga">
                      {item.title}
                    </h1>
                    <p className="mt-3 leading-snug">{item.overview}</p>
                    <div className="flex items-center gap-5 mt-5">
                      <Button link={`movie/${item.id}`}>Watch now</Button>
                      <Button variant="secondary">
                        <BsPlayCircle className="text-xl"></BsPlayCircle>
                        Preview
                      </Button>
                    </div>
                  </div>

                  <div className="absolute w-full px-5 max-w-[1170px] hidden lg:block bottom-10 xl:bottom-0 left-2/4 -translate-x-2/4 ">
                    <MoviePreview movieId={item.id}></MoviePreview>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Banner;
