import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) {
    return;
  }

  const main_movie = movies[0];
  const { original_title, overview, id } = main_movie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview}></VideoTitle>
      <VideoBackground movieid={id}></VideoBackground>
    </div>
  );
};

export default MainContainer;
