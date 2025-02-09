import React from "react";
import "./App.css";
import Header from "./components/Header/Header.tsx";
import Body from "./components/Body/Body.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./components/About/About.tsx";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu.tsx";
import UserContext from "./context.ts";
import { Provider } from "react-redux";
import { appStore } from "./utils/store.ts";
import Cart from "./components/Cart/Cart.tsx";

function App() {
  const [userData, setUserData] = React.useState("Gopinath");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userData, setUserData }}>
        <BrowserRouter>
          <div className="app-container">
            <Header />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="about" element={<About />} />
              <Route path="restaurant/:resId" element={<RestaurantMenu />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
