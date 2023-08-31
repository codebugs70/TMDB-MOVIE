import React from "react";

const MovieProduction = ({ data = [] }) => {
  return (
    <section className="flex flex-wrap items-center gap-3">
      {data.length > 0 &&
        data.map((item) => (
          <p
            key={item.name}
            className="p-2 rounded-sm text-saga bg-primaryDark w-fit "
          >
            {item.name}
          </p>
        ))}
    </section>
  );
};

export default MovieProduction;
