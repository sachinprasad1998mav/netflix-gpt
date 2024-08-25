import { options } from "../utils/const";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",

      options
    );
    const JSON_DATA = await data.json();
    console.log(JSON_DATA);

    dispatch(addNowPlayingMovies(JSON_DATA.results));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
