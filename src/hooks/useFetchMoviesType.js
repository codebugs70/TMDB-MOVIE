import axios from "axios";
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../utils/config";
/* ====================================================== */

const useFetchMoviesType = (type) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      if (!type) return;
      try {
        const res = await axios(`${API_URL}/${type}?api_key=${API_KEY}`);
        const results = res.data.results;
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [type]);

  return { movies, isLoading };
};

export default useFetchMoviesType;
