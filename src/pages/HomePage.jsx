import React from "react";
import MovieList from "../components/movies/MovieList";
import Heading from "../components/heading/Heading";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
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
          <MovieList type="now_playing"></MovieList>
        </div>
        <div className="flex flex-col gap-5">
          <Heading>Popular movies</Heading>
          <MovieList type="popular"></MovieList>
        </div>
        <div className="flex flex-col gap-5">
          <Heading>Top Rated movies</Heading>
          <MovieList type="top_rated"></MovieList>
        </div>
        <div className="flex flex-col gap-5">
          <Heading>Upcoming movies</Heading>
          <MovieList type="upcoming"></MovieList>
        </div>
      </section>

      <footer className="flex items-center justify-center pb-5">
        @Copyright by KID-NAME-FINGER 2023
      </footer>
    </main>
  );
};

export default HomePage;
