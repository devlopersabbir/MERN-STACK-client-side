import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import QuickView from "./Components/Product/QuickView/QuickView";
import { popup } from "./recoil/atom/productPopup";
import { useRecoilState } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Pages/Public/Profile/Profile";
import Order from "./Pages/Public/Order/Order";
import Cart from "./Pages/Public/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const isUser = useSelector((state) => state.auth.token);
  const [viewPop, setPopView] = useRecoilState(popup);
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: "9999999999999" }}
      />
      {viewPop ? <QuickView setPopView={setPopView} /> : ""}
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route
            path="account/profile"
            element={isUser ? <Profile /> : <Navigate replace to={"/"} />}
          />
          <Route
            path="account/order"
            element={isUser ? <Order /> : <Navigate replace to={"/"} />}
          />
          <Route
            path="account/cart"
            element={isUser ? <Cart /> : <Navigate replace to={"/"} />}
          />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
