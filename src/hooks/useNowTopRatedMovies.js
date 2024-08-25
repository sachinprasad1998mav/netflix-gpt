import { options } from "../utils/const";
import { addNowTopRatedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useNowTopRatedMovies = () => {
  const getNowTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",

      options
    );
    const JSON_DATA = await data.json();
    console.log(JSON_DATA);

    dispatch(addNowTopRatedMovies(JSON_DATA.results));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getNowTopRatedMovies();
  }, []);
};
