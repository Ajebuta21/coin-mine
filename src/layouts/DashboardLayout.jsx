import React from "react";
import DashboardNav from "../components/navs/DashboardNav";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardNav />
      {children}
    </>
  );
};

export default DashboardLayout;
