import React from "react";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { popup } from "../../../recoil/atom/productPopup";
import { useRecoilState } from "recoil";

const Card = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  const [message, setMessage] = useState(false);
  const [wishMessage, setWishMessage] = useState(false);
  const [quickView, setQuickView] = useRecoilState(popup);

  const allColor = data?.color;
  const proImage = data?.images;

  console.log(proImage[0]);
  return (
    <div className="Card w-80 max-w-full h-auto rounded-lg shadow-xl dark:bg-slate-800 dark:text-white">
      <div
        className="product-image w-full h-[420px] overflow-hidden  relative rounded-lg"
        onMouseLeave={() => setIsHover(false)}
        onMouseOver={() => setIsHover(true)}
      >
        {isHover ? (
          <img
            src={proImage[0]?.url}
            alt=""
            className="rounded-lg w-full h-[420px] object-cover ease-in  duration-700 absolute top-0 left-0 right-0 bottom-0"
          />
        ) : (
          <img
            src={proImage[1]?.url}
            alt=""
            className="rounded-lg w-full h-[420px] object-cover ease-in duration-700 absolute top-0 left-0 right-0 bottom-0"
          />
        )}

        {isHover ? (
          <div className="hoverDetails absolute top-0 left-0 right-0 bottom-0 -translate-y-0 transition-all duration-700 w-full h-full">
            <div className="rightSideIcon relative flex flex-col">
              <button
                type="button"
                className="absolute right-4 top-4 bg-orange-100 rounded-full p-1"
              >
                <div className="view relative w-full h-full rounded-full overflow-hidden flex justify-center items-center hover:w-full transition-all duration-300">
                  {message ? (
                    <button className="px-2 block transition-all duration-300">
                      Quick view
                    </button>
                  ) : (
                    <button className="px-2 hidden transition-all duration-300">
                      Quick view
                    </button>
                  )}

                  <VisibilityIcon
                    className="text-gray-900"
                    onClick={() => setQuickView(true)}
                    onMouseLeave={() => setMessage(false)}
                    onMouseOver={() => setMessage(true)}
                  />
                </div>
              </button>
              <button
                type="button"
                className="absolute right-4 top-16 bg-blue-100 rounded-full p-1"
              >
                <div className="view relative w-full h-full rounded-full overflow-hidden flex justify-center items-center hover:w-full transition-all duration-300">
                  {wishMessage ? (
                    <span className="px-2 block transition-all duration-300">
                      Wishlist
                    </span>
                  ) : (
                    <span className="px-2 hidden transition-all duration-300">
                      Wishlist
                    </span>
                  )}

                  <FavoriteBorderOutlinedIcon
                    className="text-gray-900"
                    onMouseLeave={() => setWishMessage(false)}
                    onMouseOver={() => setWishMessage(true)}
                  />
                </div>
              </button>
            </div>
            <div className="addToCardButton relative">
              <button
                type="button"
                className="absolute right-24 -bottom-96 rounded-md hover:bg-gray-100 hover:text-black duration-300 bg-gray-600 text-white px-3 py-1"
              >
                Add to Card
              </button>
            </div>
          </div>
        ) : (
          <div className="hoverDetails absolute top-0 left-0 right-0 bottom-0 -translate-y-20 transition-all duration-700 w-full h-full"></div>
        )}
      </div>
      <div className="productDeatils flex flex-col p-3">
        {/* product title */}
        <h1 className="text-xl font-semibold">{data?.name}</h1>
        {!data?.color ? (
          <span className="text-red-600">Color Not set</span>
        ) : (
          <div className="color flex flex-row gap-x-1 py-1 justify-between justify-center items-center">
            <div className="left flex flex-row gap-x-1 py-1">
              {/* product color */}
              {allColor &&
                allColor.map((clr) => (
                  <div className="fstColor w-7 h-7 rounded-full border-[2px] p-[2px] border-gray-800 cursor-pointer">
                    <div
                      className="span w-full h-full rounded-full"
                      style={{ backgroundColor: `${clr}` }}
                    ></div>
                  </div>
                ))}
            </div>
            <div className="right justify-center items-center">
              <h2>
                Brand: <span className="font-bold">{data?.brand}</span>
              </h2>
            </div>
          </div>
        )}

        <div className="description truncate py-1 hover:underline text-base">
          <p>{data?.description}</p>
        </div>
        <div className="price py-2 flex flex-row justify-between items-center text-center">
          <span className="text-base font-bold">${data?.price}</span>
          <div className="review flex flex-row items-center">
            <span>
              <StarOutlinedIcon
                style={{ fontSize: "20px", color: "#d68e36" }}
              />
            </span>
            <span>
              <StarOutlinedIcon
                style={{ fontSize: "20px", color: "#d68e36" }}
              />
            </span>
            <span>
              <StarOutlinedIcon
                style={{ fontSize: "20px", color: "#d68e36" }}
              />
            </span>
            <span>
              <StarOutlinedIcon
                style={{ fontSize: "20px", color: "#d68e36" }}
              />
            </span>
            <span>
              <StarOutlinedIcon
                style={{ fontSize: "20px", color: "#d68e36" }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
