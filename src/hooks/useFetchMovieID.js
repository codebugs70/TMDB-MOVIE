import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../utils/config";

export default function useFetchMovieID(movieID) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovies() {
      if (!movieID) return;
      const res = await axios(`${API_URL}/${movieID}?api_key=${API_KEY}`);
      const results = res.data;
      setMovie(results);
    }
    fetchMovies();
  }, [movieID]);

  return { movie };
}
