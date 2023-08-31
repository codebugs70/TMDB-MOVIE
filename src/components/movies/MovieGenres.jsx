import React from "react";

const MovieGenres = ({ data = [] }) => {
  return (
    <section className="flex items-center gap-2 my-4">
      {data.length > 0 &&
        data.map((item) => (
          <span
            className="px-4 py-2 text-sm font-semibold text-black rounded-lg bg-VerdantSaga"
            key={item.id}
          >
            {item.name}
          </span>
        ))}
    </section>
  );
};

export default MovieGenres;
