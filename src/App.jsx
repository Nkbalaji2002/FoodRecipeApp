import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";
import Details from "./pages/details/Details";

const App = () => {
  return (
    <>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/favorites" Component={Favorites} />
          <Route path="/recipe-item/:id" Component={Details} />
        </Routes>
      </div>
    </>
  );
};

export default App;
