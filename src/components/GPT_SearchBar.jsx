import React from "react";

const GPT_SearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form action="" className="w-1/2  bg-black  grid grid-cols-12">
        <input
          type="text"
          placeholder="what would you like to watch today"
          className="py-4 m-4 col-span-9"
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPT_SearchBar;
