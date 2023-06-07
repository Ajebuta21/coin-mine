import React from 'react'

const UserPlans = () => {
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
            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
        <span className="font-semibold text-sm uppercase">my plans</span>
      </div>
      <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 text-green-800 gap-6">
        <div className="w-full px-4 py-6 shadow-md border border-green-800 flex flex-col items-center gap-6">
          <p class="mt-1 text-center w-full text-sm leading-6 text-gray-500">
            Silver Plan
          </p>
          <div className="w-full flex justify-around items-center">
            <span className="flex flex-col items-center">
              <h3 className="text-2xl">3%</h3>
              <p className="text-xs text-gray-500">Roi</p>
            </span>
            <span className="text-xs text-gray-500">for</span>
            <span className="flex flex-col items-center">
              <h3 className="text-2xl">39</h3>
              <p className="text-xs text-gray-500">Day(s) left</p>
            </span>
          </div>
          <div className="flex flex-col w-full text-sm">
            <p className="w-full flex items-center justify-between border-b border-dashed py-2">
              <span className="font-semibold">Plan capital</span>
              <span>$4,000</span>
            </p>
            <p className="w-full flex items-center justify-between border-b border-dashed py-2">
              <span className="font-semibold">Plan ID</span>
              <span>#375836</span>
            </p>
            <p className="w-full flex items-center justify-between border-b border-dashed py-2">
              <span className="font-semibold">Daily returns</span>
              <span>$120</span>
            </p>
            <p className="w-full flex items-center justify-between border-b border-dashed py-2">
              <span className="font-semibold">Total returns</span>
              <span>$10,800</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPlans