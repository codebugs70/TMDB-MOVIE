import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import MovieList from "../components/movies/MovieList";
import Heading from "../components/heading/Heading";
import { useEffect } from "react";
/* ====================================================== */

const HomePage = () => {
  // FIX SCROLL BUG
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main>
      <section className="h-screen">
        <Header></Header>
        <Banner></Banner>
      </section>

      <section className="flex flex-col gap-20 my-20 page-container">
        <div className="flex flex-col gap-5">
          <Heading>Now Playing movies</Heading>
          <MovieList category="now_playing"></MovieList>
        </div>
        <div className="flex flex-col gap-5">
          <Heading>Popular movies</Heading>
          <MovieList category="popular"></MovieList>
        </div>
        <div className="flex flex-col gap-5">
          <Heading>Top Rated movies</Heading>
          <MovieList category="top_rated"></MovieList>
        </div>
        <div className="flex flex-col gap-5">
          <Heading>Upcoming movies</Heading>
          <MovieList category="upcoming"></MovieList>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
