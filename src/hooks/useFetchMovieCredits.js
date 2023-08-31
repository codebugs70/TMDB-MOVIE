import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { API_KEY, API_URL } from "../utils/config";
/* ====================================================== */

export default function useFetchMovieCredits(movieID) {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCredit() {
      if (!movieID) return;
      const res = await axios(
        `${API_URL}/${movieID}/credits?api_key=${API_KEY}`
      );
      const results = res.data;
      setCredits(results);
      setIsLoading(false);
    }
    fetchCredit();
  }, [movieID]);

  return { credits, isLoading };
}
