import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return (
    <h1 className="text-4xl font-semibold capitalize text-linear">
      {children}
    </h1>
  );
};

/* Add PropsTypes */
Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
