import axios from "axios";
import { useState, useEffect } from "react";
import { API_KEY, API_SEARCH_QUERY, API_URL } from "../utils/config";
/* ====================================================== */

const useFetchSearchMovies = (searchVal, nextPage) => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        let apiUrl = `${API_URL}/now_playing?api_key=${API_KEY}&page=${nextPage}`;

        if (searchVal !== "") {
          apiUrl = `${API_SEARCH_QUERY}?api_key=${API_KEY}&query=${searchVal}&page=${nextPage}`;
        }

        const res = await axios(apiUrl);

        const totalPages = res.data.total_pages;
        if (totalPages) setPageCount(totalPages);

        const results = res.data.results;
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [nextPage, searchVal]);

  return { movies, isLoading, pageCount };
};

export default useFetchSearchMovies;
