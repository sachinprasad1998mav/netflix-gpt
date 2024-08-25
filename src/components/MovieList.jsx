import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="px-6">
        <h1 className="text-3xl py-2 text-white">{title}</h1>
        <div className="flex overflow-x-scroll p-6">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} poster={movie.poster_path}></MovieCard>
            ))}
          </div>
        </div>
        <MovieCard></MovieCard>
      </div>
    )
  );
};

export default MovieList;
