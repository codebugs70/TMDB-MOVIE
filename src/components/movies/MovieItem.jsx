import React from "react";
import { MOVIE_CARDIMG } from "../../utils/config";
import Button from "../button/Button";
import altImg from "/error-movie.jpg";
import Skeleton from "../loading/Skeleton";
/* ====================================================== */

const MovieItem = ({ data, imageHeight = "h-[412px] w-full" }) => {
  return (
    <article className="flex flex-col">
      <div className={` ${imageHeight}`}>
        <img
          src={`${MOVIE_CARDIMG}/${data.poster_path}`}
          className="img-cover rounded-tl-md rounded-tr-md"
          alt="movie-banner"
          onError={(e) => {
            e.target.src = altImg;
          }}
        />
      </div>
      <Button
        link={`movie/${data.id}`}
        className="flex items-center justify-center w-full rounded-none"
        variant="primary"
      >
        Watch now
      </Button>
    </article>
  );
};

export default MovieItem;

export const MovieItemSkeleton = () => {
  return (
    <article>
      <Skeleton className="w-full h-[420px] rounded-md"></Skeleton>
    </article>
  );
};
