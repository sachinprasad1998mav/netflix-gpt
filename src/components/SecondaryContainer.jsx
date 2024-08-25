import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  return (
    <div className="bg-black">
      <div className="-mt-28 pl-12 relative z-40 ">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Trending"}
          movies={movies.addNowTopRatedMovies}
        ></MovieList>
        <MovieList
          title={"Popular"}
          movies={movies.nowPopularMovies}
        ></MovieList>
        <MovieList
          title={"Upcoming Movies"}
          movies={movies.addNowUpComingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
