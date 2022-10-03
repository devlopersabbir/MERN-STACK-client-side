import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeTheme } from "../redux/slice/themeSlice";

const Darkmode = () => {
  const dispatch = useDispatch();
  const statusCheck = useSelector((state) => state.theme.mode);
  // console.log(statusCheck);
  const clickHandler = (e) => {
    const value = e.target.checked;
    dispatch(activeTheme(value));
  };

  useEffect(() => {
    if (!statusCheck) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  });

  return (
    <label
      htmlFor="default-toggle"
      className="inline-flex relative items-center cursor-pointer"
    >
      {!statusCheck ? (
        <input
          type="checkbox"
          id="default-toggle"
          className="sr-only peer"
          onChange={clickHandler}
        />
      ) : (
        <input
          type="checkbox"
          checked
          id="default-toggle"
          className="sr-only peer"
          onChange={clickHandler}
        />
      )}

      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
};

export default Darkmode;
