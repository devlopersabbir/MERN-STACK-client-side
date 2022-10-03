import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchResult from "./SearchResult";

const Search = ({ open }) => {
  return open ? (
    <div className="absolute w-full mainContainer z-10 translate-y-[0px] transition-all duration-700">
      <div className="search bg-gray-100 dark:bg-gray-800 dark:text-white">
        <div className="searchBox py-6 container h-auto mx-auto">
          <form className="flex items-center justify-center">
            <div className="search-find flex flex-row">
              <input
                type="text"
                placeholder="I'm Looking for..."
                name="search"
                id="search"
                className="w-[520px] h-auto px-4 py-3 text-3xl outline-none border-none text-gray-400 placeholder:text-gray-400 bg-transparent"
              />
              <button type="submit">
                <SearchOutlinedIcon
                  style={{ fontSize: "2.5rem", color: "orange" }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
      <SearchResult />
    </div>
  ) : (
    <div className="mainContainer absolute w-full z-10 -translate-y-[2000px] transition-all duration-700">
      <div className="search bg-gray-100">
        <div className="searchBox py-6 container h-auto mx-auto">
          <form className="flex items-center justify-center">
            <div className="search-find flex flex-row">
              <input
                type="text"
                placeholder="I'm Looking for..."
                name="search"
                id="search"
                className="w-[520px] h-auto px-4 py-3 text-3xl outline-none border-none text-gray-400 placeholder:text-gray-400 bg-transparent"
              />
              <button type="submit">
                <SearchOutlinedIcon
                  style={{ fontSize: "2.5rem", color: "orange" }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
      <SearchResult />
    </div>
  );
};

export default Search;
