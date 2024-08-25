import { options } from "../utils/const";
import { addNowUpComingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useNowUpcomingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowUpcomingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        options
      );
      const jsonData = await data.json();
      console.log(jsonData);

      dispatch(addNowUpComingMovies(jsonData.results));
    } catch (error) {
      console.error("Failed to fetch upcoming movies:", error);
    }
  };

  useEffect(() => {
    fetchNowUpcomingMovies();
  }, []);
};
