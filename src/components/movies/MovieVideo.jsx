import useFetchMovieVideo from "../../hooks/useFetchMovieVideo";
import React from "react";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
/* ====================================================== */

const MovieVideo = ({ id }) => {
  const { videos } = useFetchMovieVideo(id);

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
                  allowFullScreen
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
