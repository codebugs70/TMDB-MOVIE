import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  children,
  onClick = () => {},
  type = "button",
  className = "rounded-md",
  variant = "primary",
  icon,
  size = "normal",
  link = "",
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "bg-saga text-black hover:bg-VerdantSaga";
      case "secondary":
        return "border-saga text-saga border hover:bg-saga hover:bg-opacity-20";

      default:
        return "";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "py-2 px-4";
      case "normal":
        return "px-5 h-[48px]";
      case "big":
        return "p-5";

      default:
        return "";
    }
  };

  const variantClass = getVariantClass();
  const sizeClass = getSizeClass();

  if (link && typeof link === "string") {
    return (
      <Link
        to={`/${link}`}
        type={type}
        className={`${className} ${variantClass} ${sizeClass} font-semibold flex items-center  gap-2 rounded-bl-md rounded-br-md `}
      >
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} ${variantClass} ${sizeClass} font-semibold flex items-center  gap-2 rounded-bl-md rounded-br-md`}
    >
      {icon}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  link: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "bordered"]),
  size: PropTypes.oneOf(["small", "normal", "big"]),
};

export default Button;
