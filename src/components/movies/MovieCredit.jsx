import React from "react";
import altImg from "/user.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MOVIE_CARDIMG } from "../../utils/config";
import "swiper/css/navigation";
import "swiper/css";
import useFetchMovieCredits from "../../hooks/useFetchMovieCredits";
import { v4 } from "uuid";
import Skeleton from "../loading/Skeleton";
import PropTypes from "prop-types";
/* ====================================================== */

const MovieCredit = ({ id }) => {
  const { credits, isLoading } = useFetchMovieCredits(id);
  const { cast } = credits;

  return (
    <section>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {isLoading &&
          Array(10)
            .fill(0)
            .map(() => (
              <SwiperSlide key={v4()}>
                <CreditItemSkeleton></CreditItemSkeleton>
              </SwiperSlide>
            ))}

        {!isLoading &&
          cast &&
          cast.splice(0, 10).map((item) => (
            <SwiperSlide key={item.cast_id}>
              <CreditItem data={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

/* Add PropsTypes */
MovieCredit.propTypes = {
  id: PropTypes.string,
};

export default MovieCredit;

function CreditItem({ data }) {
  if (!data) return null;
  return (
    <div className="aspect-square">
      <img
        src={`${MOVIE_CARDIMG}/${data?.profile_path}`}
        alt=""
        className="rounded-md img-cover"
        onError={(e) => {
          e.target.src = altImg;
        }}
      />
    </div>
  );
}

function CreditItemSkeleton() {
  return (
    <Skeleton
      baseColor="bg-darkSaga"
      className="w-[275px] h-[275px] rounded-lg"
    ></Skeleton>
  );
}
