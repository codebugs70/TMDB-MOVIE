import React from "react";
import { BiSearch } from "react-icons/bi";
import PropTypes from "prop-types";

const Searchbar = ({ value, onChange = () => {} }) => {
  return (
    <section className="flex items-center w-full gap-1">
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search movies..."
        className="w-full p-3 text-sm text-white border border-transparent rounded-md bg-darkSaga focus-within:border-saga"
      />
      <span className="w-[50px] h-[45px] text-xl hover:text-saga rounded-md cursor-pointer flex items-center justify-center bg-darkSaga">
        <BiSearch></BiSearch>
      </span>
    </section>
  );
};

/* Add PropsTypes */
Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Searchbar;
