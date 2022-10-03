import React, { useState } from "react";
import { toast } from "react-toastify";
import { apiRequest } from "../../../apiRequest/apiRequest";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slice/authSlice";

const Login = ({ setSingup }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      username,
      password,
    };
    try {
      const response = await apiRequest.post(
        "/api/ecom/v1/user/auth/login",
        data
      );
      const resData = response.data;
      dispatch(login(resData));
      toast.success(resData.message);
      setLoading(false);
    } catch (error) {
      const mess = error.response.data;
      toast.error(mess.message);
      setLoading(false);
    }
  };
  return (
    <div className="loginFrom">
      <form className="flex flex-col gap-y-3" onSubmit={loginSubmit}>
        <div className="email flex flex-col gap-y-2">
          <label htmlFor="username">Enter your username</label>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password flex flex-col gap-y-2">
          <label htmlFor="password">Password</label>
          <input
            className="w-full bg-gray-100 dark:bg-black rounded-md dark:text-white py-2 px-3 text-lg outline-none"
            type="password"
            placeholder="Password address"
            name="password"
            id="password"
            minLength={"6"}
            maxLength={"18"}
            title="Very week password!"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginBtn flex flex-col gap-y-2">
          {loading ? (
            <button
              className="w-full bg-gray-100 dark:bg-black rounded-md dark:text-white py-3 px-3 text-base outline-none uppercase font-bold shadow hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer transition-all duration-300"
              type="submit"
              disabled
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
              Processing...
            </button>
          ) : (
            <button
              className="w-full bg-gray-100 dark:bg-black rounded-md dark:text-white py-3 px-3 text-base outline-none uppercase font-bold shadow hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer transition-all duration-300"
              type="submit"
            >
              Log in
            </button>
          )}
        </div>
      </form>
      <div className="forgetPassMessage text-center my-4">
        <span className="underline">Forget your password!</span>
      </div>
      <div className="createAccountButton">
        <button
          onClick={() => setSingup(false)}
          className="w-full bg-gray-100 dark:bg-black rounded-md dark:text-white py-3 px-3 text-base outline-none capitalize font-bold shadow hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer transition-all duration-300"
          type="button"
        >
          create new account
        </button>
      </div>
    </div>
  );
};

export default Login;
