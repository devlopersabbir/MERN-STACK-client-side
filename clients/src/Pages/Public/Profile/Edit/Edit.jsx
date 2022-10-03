import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { apiRequest } from "../../../../apiRequest/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../../../redux/slice/authSlice";

const Edit = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const id = user._id;
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(user.image?.url);
  const [username, setUsername] = useState(user?.username);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  // console.log(image);
  const imagHandler = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));

    const file = e.target.files[0];
    convertImage(file);
  };
  const convertImage = (file) => {
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () => {
      setImage(render.result);
    };
  };

  const subHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      image,
      username,
      email,
      name,
    };
    try {
      const response = await apiRequest.put(
        `/api/ecom/v1/users/update/${id}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const resData = response.data;
      setLoading(false);
      setOpen(false);
      dispatch(logout());
      toast.success(resData.message);
    } catch (error) {
      const mess = error.response.data;
      toast.error(mess?.message);
      setLoading(false);
    }
  };
  return (
    <>
      {open ? (
        <div className="edit shadow-xl absolute top-7 w-[620px] h-auto translate-y-0 transition-all ease-in-out duration-300">
          <div className="box backdrop-blur-xl mx-auto">
            <div className="button relative">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="absolute top-0 right-0 p-2 rounded-md bg-blue-100"
              >
                <CloseIcon />
              </button>
            </div>
            <h1 className="py-4 text-center text-2xl font-bold">
              Uploadte profile
            </h1>
            <form
              className="py-10 px-10 flex flex-col gap-y-4"
              onSubmit={subHandler}
            >
              <div className="full-name">
                <input
                  className="w-full bg-gray-100 dark:bg-black rounded-md dark:text-white py-2 px-3 text-lg outline-none"
                  type="text"
                  placeholder="full name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="username">
                <input
                  className="w-full bg-gray-100 dark:bg-black rounded-md dark:text-white py-2 px-3 text-lg outline-none"
                  type="text"
                  placeholder="username"
                  name="username"
                  size="45"
                  pattern="[a-z]{4,18}"
                  title="4 to 8 lowercase letters"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="email">
                <input
                  className="w-full bg-gray-100 dark:bg-black rounded-md
            dark:text-white py-2 px-3 text-lg outline-none"
                  type="email"
                  placeholder="Email address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{(2, 4)}$"
                  title="Invalid email address"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="profile flex justify-center items-center w-full">
                <div className="preview w-24 h-20 object-center content-center  rounded-full">
                  {file ? (
                    <img
                      src={file}
                      width="100%"
                      height="100%"
                      className="rounded-full w-24 h-20 object-center content-center"
                      alt=""
                    />
                  ) : (
                    <div className="w-full h-full bg-orange-400 rounded-full"></div>
                  )}
                </div>
                <label
                  htmlFor="file"
                  className="ml-6 bg-blue-600 w-full h-12 rounded-md text-white flex justify-center items-center cursor-pointer"
                >
                  Upload your profile picture
                  <input
                    onChange={imagHandler}
                    type="file"
                    name="file"
                    id="file"
                    style={{ display: "none" }}
                  />
                </label>
              </div>
              {loading ? (
                <button
                  className="bg-gray-500 text-white flex justify-center items-center py-3 rounded-md mb-4"
                  disabled
                  type="submit"
                >
                  <svg
                    role="status"
                    class="inline mr-3 w-4 h-4 text-orange-600 animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Updating...
                </button>
              ) : (
                <button
                  className="bg-gray-500 text-white flex justify-center items-center py-3 rounded-md mb-4"
                  type="submit"
                >
                  Update
                </button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <div className="edit shadow-xl absolute top-7 w-[620px] h-auto -translate-y-[9999px] transition-all ease-in-out duration-300">
          <div className="box backdrop-blur-xl mx-auto">
            <div className="button relative">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="absolute top-0 right-0 p-2 rounded-md bg-blue-100"
              >
                <CloseIcon />
              </button>
            </div>
            <h1 className="py-4 text-center text-2xl font-bold">
              Uploadte profile
            </h1>
            <form
              className="py-10 px-10 flex flex-col gap-y-4"
              onSubmit={subHandler}
            >
              <div className="full-name">
                <input
                  className="w-full bg-gray-100 dark:bg-black rounded-md dark:text-white py-2 px-3 text-lg outline-none"
                  type="text"
                  placeholder="full name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="username">
                <input
                  className="w-full bg-gray-100 dark:bg-black rounded-md dark:text-white py-2 px-3 text-lg outline-none"
                  type="text"
                  placeholder="username"
                  name="username"
                  required
                  size="45"
                  pattern="[a-z]{4,18}"
                  title="4 to 8 lowercase letters"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="email">
                <input
                  className="w-full bg-gray-100 dark:bg-black rounded-md
            dark:text-white py-2 px-3 text-lg outline-none"
                  type="email"
                  placeholder="Email address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{(2, 4)}$"
                  title="Invalid email address"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="profile flex justify-center items-center w-full">
                <div className="preview w-24 h-20 object-center content-center  rounded-full">
                  {file ? (
                    <img
                      src={file}
                      width="100%"
                      height="100%"
                      className="rounded-full w-24 h-20 object-center content-center"
                      alt=""
                    />
                  ) : (
                    <div className="w-full h-full bg-orange-400 rounded-full"></div>
                  )}
                </div>
                <label
                  htmlFor="file"
                  className="ml-6 bg-blue-600 w-full h-12 rounded-md text-white flex justify-center items-center cursor-pointer"
                >
                  Upload your profile picture
                  <input
                    onChange={imagHandler}
                    type="file"
                    name="file"
                    id="file"
                    style={{ display: "none" }}
                  />
                </label>
              </div>
              {loading ? (
                <button
                  className="bg-gray-500 text-white flex justify-center items-center py-3 rounded-md mb-4"
                  disabled
                  type="submit"
                >
                  <svg
                    role="status"
                    class="inline mr-3 w-4 h-4 text-orange-600 animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Updating...
                </button>
              ) : (
                <button
                  className="bg-gray-500 text-white flex justify-center items-center py-3 rounded-md mb-4"
                  type="submit"
                >
                  Update
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit;
