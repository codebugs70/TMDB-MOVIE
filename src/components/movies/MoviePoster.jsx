import React from "react";
import { MOVIE_CARDIMG } from "../../utils/config";
import PropTypes from "prop-types";

const MoviePoster = ({ poster }) => {
  return (
    <div className="flex-1 hidden w-full h-screen md:block">
      <img
        src={`${MOVIE_CARDIMG}/${poster}`}
        className="img-cover"
        alt="movie-poster"
      />
    </div>
  );
};

/* Add PropsTypes */
MoviePoster.propTypes = {
  poster: PropTypes.string,
};

export default MoviePoster;
