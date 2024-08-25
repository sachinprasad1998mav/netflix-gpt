import React, { useEffect, useCallback, useState } from "react";
import { options } from "../utils/const";

const VideoBackground = ({ movieid }) => {
  const [trailer1, setTrailer1] = useState(null);
  const [trailer2, setTrailer2] = useState(null);

  const getMovieTrailer = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos`,
        options
      );
      const data = await response.json();

      // Filter to get only trailers
      const filterData = data.results.filter(
        (video) => video.type === "Trailer"
      );
      setTrailer1(filterData[0]);
      setTrailer2(filterData[1]);
    } catch (error) {
      console.error("Error fetching the movie trailer:", error);
    }
  }, [movieid]);

  useEffect(() => {
    getMovieTrailer();
  }, [getMovieTrailer]);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${
          trailer1?.key || trailer2?.key
        }?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
