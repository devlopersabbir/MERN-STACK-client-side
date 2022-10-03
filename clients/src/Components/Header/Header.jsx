import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Topbar from "./Topbar";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Topbar />
      <div className="header dark:bg-gray-900 dark:text-white shadow-xl z-20">
        <div className="container mx-auto lg:px-4 md:px-2 flex justify-between py-3">
          <div className="leftSide">
            <ul className="flex gap-x-5">
              <li>
                <Link to={"shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"shop"}>Shop</Link>
              </li>
            </ul>
          </div>
          <div className="RightSide flex gap-x-4">
            <div className="search">
              {open ? (
                <button
                  type="button"
                  className="icon"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon style={{ fontSize: "1.8rem" }} />
                </button>
              ) : (
                <button
                  type="button"
                  className="icon"
                  onClick={() => setOpen(true)}
                >
                  <SearchOutlinedIcon style={{ fontSize: "1.8rem" }} />
                </button>
              )}
            </div>
            <div className="wishList">
              <div className="icon relative cursor-pointer">
                <FavoriteBorderOutlinedIcon style={{ fontSize: "1.8rem" }} />
                <span className="count absolute -top-[9px] -right-2 bg-orange-300 text-gray-900 w-5 h-5 text-center rounded-full">
                  1
                </span>
              </div>
            </div>
            <div className="card">
              <div className="icon relative cursor-pointer">
                <ShoppingBasketOutlinedIcon style={{ fontSize: "1.8rem" }} />
                <span className="count absolute -top-[9px] -right-2 bg-orange-300 text-gray-900 w-5 h-5 text-center rounded-full">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Search open={open} />
    </>
  );
};

export default Header;
