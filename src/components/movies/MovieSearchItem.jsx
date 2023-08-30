import React from "react";
import { Link } from "react-router-dom";
import { MOVIE_CARDIMG } from "../../utils/config";
import altImg from "/error-movie.jpg";
import Skeleton from "../loading/Skeleton";
/* ====================================================== */

const MovieSearchItem = ({ item }) => {
  return (
    <Link
      to={`/movie/${item.id}`}
      className="flex items-start gap-4 p-2 hover:bg-white hover:bg-opacity-10"
    >
      <div className="aspect-square h-[70px]">
        <img
          src={`${MOVIE_CARDIMG}/${item.poster_path}`}
          className="rounded-md img-cover"
          alt="movies"
          onError={(e) => {
            e.target.src = altImg;
          }}
        />
      </div>
      <div>
        <h1 className="text-sm text-saga line-clamp-2">{item.title}</h1>
        <p className="mt-1 text-xs line-clamp-2">{item.overview}</p>
      </div>
    </Link>
  );
};

export default MovieSearchItem;

export const MovieSearchItemSkeleton = () => {
  return (
    <div className="flex items-start gap-4 p-2 hover:bg-white hover:bg-opacity-10">
      <Skeleton
        color="bg-primaryDark"
        className="aspect-square h-[70px] rounded-md"
      ></Skeleton>
      <div className="w-[260px]">
        <Skeleton
          color="bg-primaryDark"
          className="h-[40px] rounded-md "
        ></Skeleton>
        <Skeleton
          color="bg-primaryDark"
          className="h-[28px] mt-2 w-full rounded-md"
        ></Skeleton>
      </div>
    </div>
  );
};
