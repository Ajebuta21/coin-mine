import React from "react";
import Navbar from "../components/navs/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default HomeLayout;
