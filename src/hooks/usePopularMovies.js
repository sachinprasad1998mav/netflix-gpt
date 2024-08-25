import { options } from "../utils/const";
import { addNowPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useNowPopularMovies = () => {
  const getNowPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",

      options
    );
    const JSON_DATA = await data.json();
    console.log(JSON_DATA);

    dispatch(addNowPopularMovies(JSON_DATA.results));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getNowPopularMovies();
  }, []);
};
