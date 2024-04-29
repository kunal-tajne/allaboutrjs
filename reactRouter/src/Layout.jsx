import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

function Layout() {

  const [text, setText] = useState(false);


  return (
    <div className="w-full h-full dark:bg-black dark:text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
