import React from "react";
import { MOVIE_CARDIMG } from "../../utils/config";
import Button from "../button/Button";

const MovieItem = ({ data }) => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="w-full h-[300px]">
          <img
            src={`${MOVIE_CARDIMG}/${data.poster_path}`}
            className="img-cover"
            alt=""
          />
        </div>
        <Button
          link={`movie/${data.id}`}
          className="flex items-center justify-center w-full rounded-none"
          variant="primary"
        >
          Watch now
        </Button>
      </div>
    </>
  );
};

export default MovieItem;
