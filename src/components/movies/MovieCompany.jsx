import React from "react";
import { MOVIE_CARDIMG } from "../../utils/config";

const MovieCompany = ({ data = [] }) => {
  return (
    <section className="flex flex-wrap items-center gap-3 mt-5">
      {data.length > 0 &&
        data.map((item) => (
          <div key={item.id} className="p-5 bg-white w-[100px] rounded-lg">
            <img
              className="object-contain aspect-square"
              src={`${MOVIE_CARDIMG}/${item.logo_path}`}
              alt=""
            />
          </div>
        ))}
    </section>
  );
};

export default MovieCompany;
