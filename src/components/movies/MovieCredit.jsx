import React from "react";
import { useState } from "react";
import { API_KEY, API_URL, MOVIE_CARDIMG } from "../../utils/config";
import { useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
/* ====================================================== */

const MovieCredit = ({ id }) => {
  const [casts, setCasts] = useState([]);

  // Fetch movie
  useEffect(() => {
    async function fetchMovies() {
      if (!id) return;
      const res = await axios(`${API_URL}/${id}/credits?api_key=${API_KEY}`);
      const results = res.data;
      setCasts(results);
    }
    fetchMovies();
  }, [id]);

  const { cast } = casts;

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
        {cast &&
          cast.splice(0, 10).map((item) => (
            <SwiperSlide key={item.cast_id}>
              <img
                src={`${MOVIE_CARDIMG}/${item.profile_path}`}
                alt=""
                className="object-cover rounded-md aspect-square"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </ul>
  );
};

export default MovieCredit;
