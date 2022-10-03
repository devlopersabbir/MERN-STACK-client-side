import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { toast } from "react-toastify";
import ProductSlider from "./ProductSlider/ProductSlider";

const QuickView = ({ setPopView }) => {
  const [value, setValue] = useState(1);

  const inc = () => {
    if (value < 10) {
      setValue(Number(value) + 1);
    } else {
      toast.error("You can't make up to 10");
    }
  };
  const dic = () => {
    if (value > 1) {
      setValue(Number(value) - 1);
    } else {
      toast.error("Please incress quantity");
    }
  };

  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // const mouseFunc = (e) => {
  //   const x = e.pageX;
  //   const y = e.pageY;
  //   const minX = x / 8;
  //   const minY = y / 8;
  //   setX(Math.floor(minX));
  //   setY(Math.floor(minY));
  // };
  // console.log(x, y);
  return (
    <div className="QuickView z-[9999999] bg-gray-900 bg-opacity-80 dark:text-white text-gray-900 dark:bg-gray-900 fixed items-center flex justify-center w-full h-full">
      <div className="contner dark:bg-gray-900 dark:text-white lg:px-4 md:px-2 max-w-5xl w-[1024px] h-[90vh] text-gray-900 shadow-xl bg-white relative rounded-md px-5 py-4 overflow-y-scroll">
        <button
          type="button"
          onClick={() => setPopView(false)}
          className="text-gray-900 absolute top-0 right-0 bg-orange-100 p-2 rounded-md"
        >
          <CloseIcon />
        </button>
        <div className="box flex flex-row justify-between px-8 gap-x-4">
          <div className="leftSide flex flex-col w-full overflow-hidden">
            <ProductSlider />
            {/* <p className="bg-gray-500 w-full">hello bd</p> */}
          </div>
          <div className="rightSide flex flex-col w-full">
            <div className="title-and-overview flex flex-col">
              <h1 className="text-xl font-semibold">
                Product 23 Sample - Clothing And Accessory Boutiques For Sale
              </h1>
              <div className="secondDiv flex flex-row justify-between items-center py-4">
                <div className="left-review">
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
                <div className="right-sold flex flex-row items-center">
                  <span>
                    <WhatshotIcon
                      style={{ color: "red", marginRight: "4px" }}
                    />
                  </span>
                  <p className="text-base font-semibold">
                    6 sold in last 15 hours
                  </p>
                </div>
              </div>

              <div className="shortDes">
                <p className="text-base text-gray-600 dark:text-white font-medium">
                  Vendor: Jimmy Choo <br></br>
                  Availability: In Stock<br></br>
                  Product Type: Loremous Comodous
                </p>
              </div>
              <div className="price py-4">
                <h1 className="font-bold text-xl">$489.00</h1>
              </div>
            </div>
            <div className="color">
              <p>Color: pink</p>
              <div className="color flex flex-row gap-x-1 py-1">
                <div className="fstColor w-7 h-7 rounded-full border-[2px] p-[2px] border-gray-800 cursor-pointer">
                  <div className="span w-full h-full bg-orange-600 rounded-full"></div>
                </div>
                <div className="sndColor w-7 h-7 rounded-full border-[2px] p-[2px] border-gray-800 cursor-pointer">
                  <div className="span w-full h-full bg-green-600 rounded-full"></div>
                </div>
                <div className="thirdColor w-7 h-7 rounded-full border-[2px] p-[2px] border-gray-800 cursor-pointer">
                  <div className="span w-full h-full bg-blue-600 rounded-full"></div>
                </div>
                <div className="fourdColor w-7 h-7 rounded-full border-[2px] p-[2px] border-gray-800 cursor-pointer">
                  <div className="span w-full h-full bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="productQuantity py-2">
              Quantity:
              <div className="Quantity-container flex items-center justify-between w-32 border-[2px] p-2">
                <button type="button" onClick={dic}>
                  <RemoveOutlinedIcon />
                </button>
                <div className="imputFeald">
                  <input
                    className="block border-none outline-none w-10 bg-transparent text-center font-bold"
                    type="number"
                    name="quantity"
                    id="quantity"
                    min="1"
                    defaultValue="1"
                    value={value}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>
                <button type="button" onClick={inc}>
                  <AddOutlinedIcon />
                </button>
              </div>
            </div>
            <div className="addtoCardand py-2 flex flex-row">
              <button
                type="button"
                className="w-10/12 border-2 border-gray-800 duration-500 transition-all ease-out py-2 hover:bg-transparent bg-gray-800 text-white hover:text-gray-900 font-bold rounded capitalize text-center mr-2 dark:hover:text-teal-300"
              >
                add to card
              </button>
              <span className="p-3 flex justify-center items-center border-[2px] rounded-full hover:bg-gray-800 hover:text-white duration-500 transition-all ease-out text-gray-900 cursor-pointer dark:text-white">
                <FavoriteBorderOutlinedIcon />
              </span>
            </div>
            <div className="buyBtn py-4">
              <button
                type="button"
                className="w-full border-2 border-gray-800 duration-500 transition-all ease-out py-3 bg-transparent hover:bg-gray-800 hover:text-white dark:hover:text-emerald-300 dark:text-white text-gray-900 font-bold rounded capitalize text-center"
              >
                Buy it now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
