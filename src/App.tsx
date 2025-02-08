import React from "react";
import "./App.css";
import Header from "./components/Header/Header.tsx";
import Body from "./components/Body/Body.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./components/About/About.tsx";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu.tsx";
import UserContext from "./context.ts";

function App() {
  const [userData, setUserData] = React.useState("Gopinath");

  return (
    <UserContext.Provider value={{ loggedInUser: userData, setUserData }}>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="about" element={<About />} />
            <Route path="restaurant/:resId" element={<RestaurantMenu />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
