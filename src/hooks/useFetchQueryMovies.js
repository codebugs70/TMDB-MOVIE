import { useState } from "react";
import { useEffect } from "react";
import { API_KEY, API_SEARCH_QUERY } from "../utils/config";
import axios from "axios";

export default function useFetchQueryMovies(query = "") {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      if (!query) return;
      const res = await axios(
        `${API_SEARCH_QUERY}?api_key=${API_KEY}&query=${query}`
      );
      const results = res.data.results;
      setMovies(results);
      setIsLoading(false);
    }
    fetchMovies();
  }, [query]);

  return {
    movies,
    isLoading,
  };
}
