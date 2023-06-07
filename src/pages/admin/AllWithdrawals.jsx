import React from "react";
import { Link } from "react-router-dom";

const AllWithdrawals = () => {
    function getStatusDot(status) {
      let dotColor = "";

      if (status === "Pending") {
        dotColor = "orange";
      } else if (status === "Confirmed") {
        dotColor = "green";
      } else if (status === "Failed") {
        dotColor = "red";
      }

      return (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: dotColor,
          }}
        />
      );
    }
  return (
    <div className="w-full bg-white min-h-screen py-[10vh] flex flex-col px-6">
      <div className="w-full flex gap-2 items-end justify-start text-green-800 py-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
        <span className="font-semibold text-sm uppercase">all withdrawals</span>
      </div>
      <div className="w-full flex flex-col gap-2 h-[70vh] overflow-auto">
        <Link
          to="/the-site/admin/all-withdraw-als/1"
          className="w-full p-1 shadow-md border grid grid-cols-4 gap-1 max-sm:text-xs"
        >
          <div className="w-full h-full flex justify-start items-center">
            -$2,650
          </div>
          <div className="w-full h-full flex gap-1 justify-start items-center">
            {getStatusDot("Confirmed")}Confirmed
          </div>
          <div className="w-full h-full flex justify-start items-center">
            From Misslesly
          </div>
          <div className="w-full h-full flex justify-end items-center text-right">
            12/06/2023 at 06:43AM
          </div>
        </Link>
        <div className="w-full p-1 shadow-md border grid grid-cols-4 gap-1 max-sm:text-xs">
          <div className="w-full h-full flex justify-start items-center">
            -$150
          </div>
          <div className="w-full h-full flex gap-1 justify-start items-center">
            {getStatusDot("Failed")}Failed
          </div>
          <div className="w-full h-full flex justify-start items-center">
            From Misslesly
          </div>
          <div className="w-full h-full flex justify-end items-center text-right">
            09/06/2023 at 01:39PM
          </div>
        </div>
        <div className="w-full p-1 shadow-md border grid grid-cols-4 gap-1 max-sm:text-xs">
          <div className="w-full h-full flex justify-start items-center">
            -$7,289
          </div>
          <div className="w-full h-full flex gap-1 justify-start items-center">
            {getStatusDot("Pending")}Pending
          </div>
          <div className="w-full h-full flex justify-start items-center">
            From Misslesly
          </div>
          <div className="w-full h-full flex justify-end items-center text-right">
            18/06/2023 at 12:07AM
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllWithdrawals;
