import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { API_KEY, API_URL } from "../utils/config";
/* ====================================================== */

export default function useFetchMovieVideo(movieID) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchMovieVideo() {
      if (!movieID) return;
      const res = await axios(
        `${API_URL}/${movieID}/videos?api_key=${API_KEY}`
      );
      const results = res.data.results;
      setVideos(results);
    }
    fetchMovieVideo();
  }, [movieID]);

  return { videos };
}
