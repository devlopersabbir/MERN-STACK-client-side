import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dark from "../../DarkMood/Dark";
import UserTopbar from "./UserTopbar/UserTopbar";
import LoginSingupSidebar from "./loginSingupSidebar/LoginSingupSidebar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const Topbar = () => {
  const isLogin = useSelector((state) => state.auth.token);
  const getUser = useSelector((state) => state.auth.user);
  const [openSidebar, setOpenSidebar] = useState(false);
  document.title = "Home";
  return (
    <div className="Topbar dark:bg-gray-900 bg-white dark:text-white border-b-[2px] lg:px-4 md:px-2">
      <div className="container mx-auto flex justify-between py-1 items-center">
        <div className="leftSide">
          <Link className="logo" to={"/"}>
            <img
              className="w-14"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/768px-Wikimedia-logo.png"
              alt="log"
            />
          </Link>
        </div>
        <div className="rightSide flex justify-end gap-x-4 items-center">
          <div className="darkModd">
            <Dark />
          </div>
          <div className="login">
            {openSidebar ? (
              <div className="button">
                <button
                  type="button"
                  className="transition-all ease-in-out duration-300"
                  onClick={() => setOpenSidebar(false)}
                >
                  <CloseIcon style={{ fontSize: "2rem" }} />
                </button>
              </div>
            ) : (
              <div className="button2">
                {isLogin ? (
                  <button
                    className="transition-all ease-in-out duration-300 w-9 h-9 rounded-full "
                    type="button"
                    onClick={() => setOpenSidebar(true)}
                  >
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={getUser.image?.url}
                      alt={getUser?.username}
                    />
                  </button>
                ) : (
                  <button
                    className="transition-all ease-in-out duration-300"
                    type="button"
                    onClick={() => setOpenSidebar(true)}
                  >
                    <AccountCircleOutlinedIcon style={{ fontSize: "2rem" }} />
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="sidebar z-[9999]">
            {isLogin ? (
              <div className="userTopbar relative">
                <UserTopbar
                  open={openSidebar}
                  setOpenSidebar={setOpenSidebar}
                />
              </div>
            ) : (
              <LoginSingupSidebar
                setOpenSidebar={setOpenSidebar}
                open={openSidebar}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
