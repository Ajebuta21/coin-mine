import React from "react";

const AllUsers = () => {
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
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
        <span className="font-semibold text-sm uppercase">all users</span>
      </div>
      <div className="w-full h-[70vh] flex flex-col text-green-800 text-sm">
        <div className="py-2 w-full border-b border-green-800 grid grid-cols-2 md:grid-cols-5 gap-1">
          <div className="col-span-2 flex justify-between items-center w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="w-12 h-12 rounded-md shadow-md ml-2"
            />
            <div className="flex flex-col w-full">
              <span className="font-semibold py-1 border-b w-full text-right">
                Misslesly
              </span>
              <span className="py-1 w-full text-right text-xs">
                lesliealexander@gmail.com
              </span>
            </div>
          </div>
          <div className="w-full col-span-2 md:col-span-1 h-full flex items-center justify-center text-base font-semibold max-md:py-2">
            $12,261
          </div>
          <div className="w-full col-span-2 h-full flex justify-around items-center">
            <span>Role: Admin</span>
            <button className="bg-white border w-28 py-1 border-green-800 hover:bg-gray-100 shadow-md rounded-md flex justify-center items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
              <span>Switch role</span>
            </button>
          </div>
        </div>
        <div className="py-2 w-full border-b border-green-800 grid grid-cols-2 md:grid-cols-5 gap-1">
          <div className="col-span-2 flex justify-between items-center w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="w-12 h-12 rounded-md shadow-md ml-2"
            />
            <div className="flex flex-col w-full">
              <span className="font-semibold py-1 border-b w-full text-right">
                Bigann
              </span>
              <span className="py-1 w-full text-right text-xs">
                annharthaway2000@gmail.com
              </span>
            </div>
          </div>
          <div className="w-full col-span-2 md:col-span-1 h-full flex items-center justify-center text-base font-semibold max-md:py-2">
            $36,500
          </div>
          <div className="w-full col-span-2 h-full flex justify-around items-center">
            <span>Role: User</span>
            <button className="bg-white border w-28 py-1 border-green-800 hover:bg-gray-100 shadow-md rounded-md flex justify-center items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
              <span>Switch role</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
