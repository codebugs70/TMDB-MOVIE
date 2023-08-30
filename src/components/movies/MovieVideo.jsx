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

const MovieVideo = ({ id }) => {
  const [videos, setVideos] = useState([]);

  // Fetch movie
  useEffect(() => {
    async function fetchMovies() {
      if (!id) return;
      const res = await axios(`${API_URL}/${id}/videos?api_key=${API_KEY}`);
      const results = res.data.results;
      setVideos(results);
    }
    fetchMovies();
  }, [id]);

  return (
    <ul>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {videos.length > 0 &&
          videos.splice(0, 3).map((item) => (
            <SwiperSlide key={v4()}>
              <div className="w-full aspect-video">
                <iframe
                  width="1170"
                  height="658"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="When it feels like your sufferings never end....."
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="img-cover"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </ul>
  );
};

export default MovieVideo;
