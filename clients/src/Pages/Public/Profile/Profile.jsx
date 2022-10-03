import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import { useState } from "react";
import ChangePass from "./Edit/ChangePass";
import Edit from "./Edit/Edit";

const Profile = () => {
  const getUser = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const [passOpen, setPassOpen] = useState(false);
  return (
    <>
      <div className="profile dark:bg-gray-900 text-gray-900 dark:text-white ">
        <div className="popup flex justify-center items-center relative">
          <ChangePass passOpen={passOpen} setPassOpen={setPassOpen} />
          <Edit open={open} setOpen={setOpen} />
        </div>
        <div className="overly">
          <div className="container px-4 py-2 mx-auto">
            <h1 className="text-3xl font-semibold text-center py-5">
              My Profile
            </h1>
            <div className="content flex flex-row justify-between">
              <div className="leftSide w-full py-4 flex flex-col justify-center items-center">
                <div className="profilePHoto overflow-hidden w-96 h-96 max-w-full border-2 border-orange-200 p-2 rounded-full">
                  <img
                    className="object-fill rounded-full w-full h-full"
                    src={getUser.image?.url}
                    alt={getUser?.name}
                  />
                </div>
                <button
                  onClick={() => setOpen(true)}
                  type="button"
                  className="bg-orange-600 hover:bg-gray-600 text-white hover:text-orange-50 duration-300 px-14 py-2 rounded-md my-5"
                >
                  Edit profile
                </button>
              </div>
              <div className="rightSide w-full py-4 flex flex-col gap-y-6">
                <div className="fullName">
                  <label
                    htmlFor="name"
                    className="text-base text-gray-400 dark:text-gray-700"
                  >
                    Full name
                  </label>
                  <h2 id="name" className="font-bold text-xl text-green-600">
                    {getUser.name ? (
                      getUser?.name
                    ) : (
                      <span className="text-orange-600">Name not set</span>
                    )}
                  </h2>
                </div>
                <div className="username">
                  <label
                    htmlFor="username"
                    className="text-base text-gray-400 dark:text-gray-700"
                  >
                    Username
                  </label>
                  <h2
                    id="username"
                    className="font-bold text-xl text-green-600"
                  >
                    {getUser.username ? (
                      getUser?.username
                    ) : (
                      <span className="text-orange-600">Username not set</span>
                    )}
                  </h2>
                </div>
                <div className="email">
                  <label
                    htmlFor="email"
                    className="text-base text-gray-400 dark:text-gray-700"
                  >
                    Email
                  </label>
                  <h2 id="email" className="font-bold text-xl text-green-600">
                    {getUser.email ? (
                      getUser?.email
                    ) : (
                      <span className="text-orange-600">Email not set</span>
                    )}
                  </h2>
                </div>
                <div className="join">
                  <label
                    htmlFor="join"
                    className="text-base text-gray-400 dark:text-gray-700"
                  >
                    Join on
                  </label>
                  <h2 id="join" className="font-bold text-xl text-green-600">
                    {moment(getUser?.createdAt).startOf("seconds").fromNow()}
                  </h2>
                </div>

                {/* 2 button */}
                <Link
                  to={"/account/order"}
                  className="w-[50%] py-3 bg-gray-500 text-white hover:text-yellow-600 hover:bg-blue-200 rounded-md duration-300 transition-all ease-out capitalize text-center"
                >
                  My order
                </Link>
                <button
                  type="button"
                  onClick={() => setPassOpen(true)}
                  className="w-[50%] py-3 bg-gray-500 text-white hover:text-yellow-600 hover:bg-blue-200 rounded-md duration-300 transition-all ease-out capitalize text-center"
                >
                  Change password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
