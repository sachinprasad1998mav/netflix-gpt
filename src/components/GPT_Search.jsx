import React from "react";
import GPT_SearchBar from "./GPT_SearchBar";
import GPT_MovieSuggestions from "./GPT_MovieSuggestions";
import { bg_URL } from "../utils/const";

const GPT_Search = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={bg_URL} alt="backgroundIMG" />
      </div>
      <GPT_SearchBar />
      <GPT_MovieSuggestions />
    </div>
  );
};

export default GPT_Search;
