import React, { useEffect } from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { useNowPopularMovies } from "../hooks/usePopularMovies";
import { useNowTopRatedMovies } from "../hooks/useNowTopRatedMovies";
import { useNowUpComingMovies } from "../hooks/useNowUpComingMovies";
import GPT_Search from "./GPT_Search";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPT);
  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTopRatedMovies();
  return (
    <div>
      <Header></Header>
      {showGPTSearch ? (
        <GPT_Search />
      ) : (
        <>
          <MainContainer></MainContainer>
          <SecondaryContainer></SecondaryContainer>
        </>
      )}
    </div>
  );
};

export default Browse;
