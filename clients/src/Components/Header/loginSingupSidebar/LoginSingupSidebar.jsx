import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Login from "../Login/Login";
import Singup from "../Singup/Singup";

const LoginSingupSidebar = ({ setOpenSidebar, open }) => {
  const [singup, setSingup] = useState(true);
  return (
    <>
      {!open ? (
        <div className="loginSingupSidebar fixed right-0 top-0 translate-x-[100%] transition-all duration-500 h-full w-[380px]">
          <div className="loginAndClose flex justify-between">
            <span>Login</span>
            <button type="button" onClick={() => setOpenSidebar(false)}>
              <CloseOutlinedIcon style={{ fontSize: "2rem" }} />
            </button>
          </div>
          <div className="loginFrom"></div>
        </div>
      ) : (
        <div className="loginSingupSidebar fixed right-0 top-0 transition-all duration-500 h-full w-[380px] px-5 py-4 shadow-xl bg-white dark:bg-gray-800 dark:shadow-xl dark:text-white">
          <div className="loginAndClose flex justify-between items-center mb-8">
            <span className="font-semibold text-2xl">
              {singup ? "Login" : "Singup"}
            </span>
            <button type="button" onClick={() => setOpenSidebar(false)}>
              <CloseOutlinedIcon style={{ fontSize: "1.5rem" }} />
            </button>
          </div>
          {singup ? (
            <Login setSingup={setSingup} />
          ) : (
            <Singup setSingup={setSingup} />
          )}
        </div>
      )}
    </>
  );
};

export default LoginSingupSidebar;
