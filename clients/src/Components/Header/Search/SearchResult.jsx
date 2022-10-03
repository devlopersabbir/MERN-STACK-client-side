import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PopulerProduct from "./PopulerProduct";

const SearchResult = () => {
  return (
    <div className="SearchResult py-6 h-[60vh] overflow-y-scroll bg-white dark:bg-gray-900 dark:text-white">
      <div className="tredingNow container mx-auto">
        <h1 className="text-base font-semibold capitalize py-3">
          trending now
        </h1>
        <div className="tags flex flex-row gap-x-4">
          <button
            type="button"
            className="px-5 text-base py-2 bg-orange-100 dark:bg-gray-700 dark:text-white rounded-sm text-gray-900"
          >
            Tags
            <span>
              <SearchOutlinedIcon
                style={{ marginLeft: "5px" }}
                className="text-orange-800 dark:text-orange-400"
              />
            </span>
          </button>
          <button
            type="button"
            className="px-5 text-base py-2 bg-orange-100 dark:bg-gray-700 dark:text-white rounded-sm text-gray-900"
          >
            Tags
            <span>
              <SearchOutlinedIcon
                style={{ marginLeft: "5px" }}
                className="text-orange-800 dark:text-orange-400"
              />
            </span>
          </button>
          <button
            type="button"
            className="px-5 text-base py-2 bg-orange-100 dark:bg-gray-700 dark:text-white rounded-sm text-gray-900"
          >
            Tags
            <span>
              <SearchOutlinedIcon
                style={{ marginLeft: "5px" }}
                className="text-orange-800 dark:text-orange-400"
              />
            </span>
          </button>
        </div>
        <PopulerProduct />
      </div>
    </div>
  );
};

export default SearchResult;
