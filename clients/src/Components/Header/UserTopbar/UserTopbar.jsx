import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slice/authSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const UserTopbar = ({ open }) => {
  // console.log(open);
  const dispatch = useDispatch();
  const logoutFunc = () => {
    try {
      dispatch(logout());
      toast.success("Logout successfull!");
    } catch (error) {
      toast.error("Maybe something went worng!");
    }
  };

  return (
    <>
      {open ? (
        <div className="absolute dropMenu transition-all ease-in-out duration-300 right-5 top-5 backdrop-blur-xl bg-black/20 dark:bg-/40 rounded py-2 px-3 shadow-xl">
          <ul className="flex flex-col gap-y-3 px-6 py-2">
            <Link
              to={"account/order"}
              className="flex flex-row gap-x-2 text-gray-900 cursor-pointer text-base dark:text-white"
            >
              <DashboardIcon />
              <span>Order</span>
            </Link>
            <Link
              to={"account/profile"}
              className="flex flex-row gap-2 text-gray-900 cursor-pointer text-base dark:text-white"
            >
              <PersonIcon />
              <span>Profile</span>
            </Link>
            <Link
              to={"account/cart"}
              className="flex flex-row gap-2 text-gray-900 cursor-pointer text-base dark:text-white"
            >
              <ShoppingCartIcon />
              <span>Cart</span>
            </Link>
            <button
              type="button"
              className="flex flex-row gap-2 text-gray-900 cursor-pointer text-base dark:text-white"
              onClick={logoutFunc}
            >
              <LogoutIcon />
              <span>Logout</span>
            </button>
          </ul>
        </div>
      ) : (
        <div className="absolute right-0 top-0 dropMenu scale-[0] transition-all ease-in-out duration-300  backdrop-blur-xl bg-black/20 dark:bg-/40 rounded py-2 px-3 shadow-xl">
          <ul className="flex flex-col gap-y-3 px-6 py-2">
            <li className="flex flex-row gap-x-2 text-gray-900 cursor-pointer text-base dark:text-white">
              <DashboardIcon />
              <span>Dashboard</span>
            </li>
            <li className="flex flex-row gap-2 text-gray-900 cursor-pointer text-base dark:text-white">
              <PersonIcon />
              <span>Profile</span>
            </li>
            <li className="flex flex-row gap-2 text-gray-900 cursor-pointer text-base dark:text-white">
              <ShoppingCartIcon />
              <span>Cart</span>
            </li>
            <li className="flex flex-row gap-2 text-gray-900 cursor-pointer text-base dark:text-white">
              <LogoutIcon />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default UserTopbar;
