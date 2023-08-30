import React from "react";
import PropTypes from "prop-types";

const Skeleton = ({ className = "", color = "bg-darkSaga" }) => {
  return <div className={`animate-pulse  ${className} ${color}`}></div>;
};

/* Add PropsTypes */
Skeleton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};
export default Skeleton;
