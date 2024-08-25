import React from "react";
import { image_CDN } from "../utils/const";
const MovieCard = ({ poster }) => {
  return (
    <div className="w-48 pr-4">
      <img src={image_CDN + poster} alt="" />
    </div>
  );
};

export default MovieCard;
