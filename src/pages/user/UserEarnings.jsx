import React from "react";

const UserEarnings = () => {
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
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span className="font-semibold text-sm uppercase">all earnings</span>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full p-1 grid grid-cols-4 gap-1 max-sm:text-xs">
          <div className="w-full h-full flex justify-start items-center">
            +$120
          </div>
          <div className="w-full h-full flex justify-start items-center">
            Gold Plan
          </div>
          <div className="w-full h-full flex justify-start items-center">
            Plan Id: 23536529
          </div>
          <div className="w-full h-full flex justify-end items-center text-right">
            21/06/2023 at 11:65PM
          </div>
        </div>
        <div className="w-full p-1 grid grid-cols-4 gap-1 max-sm:text-xs">
          <div className="w-full h-full flex justify-start items-center">
            +$40
          </div>
          <div className="w-full h-full flex justify-start items-center">
            Bronze Plan
          </div>
          <div className="w-full h-full flex justify-start items-center">
            Plan Id: 2354556
          </div>
          <div className="w-full h-full flex justify-end items-center text-right">
            21/06/2023 at 11:05PM
          </div>
        </div>
        <div className="w-full p-1 grid grid-cols-4 gap-1 max-sm:text-xs">
          <div className="w-full h-full flex justify-start items-center">
            +$40
          </div>
          <div className="w-full h-full flex justify-start items-center">
            Bronze Plan
          </div>
          <div className="w-full h-full flex justify-start items-center">
            Plan Id: 2354556
          </div>
          <div className="w-full h-full flex justify-end items-center text-right">
            20/06/2023 at 11:05PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEarnings;
