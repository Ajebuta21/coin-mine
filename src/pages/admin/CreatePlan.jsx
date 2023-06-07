import React from "react";

const CreatePlan = () => {
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
            d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        <span className="font-semibold text-sm uppercase">
          Manage and add plans
        </span>
      </div>
      <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-2">
        <div className="bg-white border shadow-md px-4 md:px-8 w-full flex flex-col justify-center gap-10 py-10 items-center">
          <form className="w-full flex flex-col gap-2 items-center text-green-800 text-sm">
            <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-gray-500">
              Create a new plan
            </h2>
            <div className="w-full relative group">
              <label className="text-xs pl-4">Plan title</label>
              <input
                type="text"
                placeholder="Title must be unique"
                className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
              />
            </div>
            <div className="w-full relative group">
              <label className="text-xs pl-4">Return on Investment</label>
              <input
                type="text"
                placeholder="Roi"
                className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
              />
            </div>
            <div className="w-full relative group">
              <label className="text-xs pl-4">Duration in days</label>
              <input
                type="text"
                placeholder="Duration"
                className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
              />
            </div>
            <div className="w-full relative group">
              <label className="text-xs pl-4">Minimum Amount</label>
              <input
                type="number"
                placeholder="Min Amount"
                className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
              />
            </div>
            <div className="w-full relative group">
              <label className="text-xs pl-4">Maximum Amount</label>
              <input
                type="number"
                placeholder="Max Amount"
                className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
              />
            </div>
            <button className="w-full p-2 bg-gradient-to-b from-green-700 to-green-800 shadow-md rounded-md text-white hover:from-green-600 hover:to-green-700 transition ease-in-out duration-300">
              Create plan
            </button>
          </form>
        </div>
        <div className="bg-white border shadow-md px-4 md:px-8 w-full flex flex-col justify-between gap-10 py-10 items-center">
          <p class="mt-1 text-left w-full text-sm leading-6 text-gray-500">
            All existing plans.
          </p>
          <div className="w-full grid grid-col-1 lg:grid-cols-2 text-green-800 gap-6 h-[50vh] overflow-auto">
            <div className="w-full px-4 py-6 shadow-md border border-green-800 flex flex-col items-center gap-6">
              <p class="mt-1 text-center w-full text-sm leading-6 text-gray-500">
                Bronze Plan
              </p>
              <div className="w-full flex justify-around items-center">
                <span className="flex flex-col items-center">
                  <h3 className="text-2xl">2%</h3>
                  <p className="text-xs text-gray-500">Roi</p>
                </span>
                <span className="text-xs text-gray-500">for</span>
                <span className="flex flex-col items-center">
                  <h3 className="text-2xl">90</h3>
                  <p className="text-xs text-gray-500">Day(s)</p>
                </span>
              </div>
              <div className="flex flex-col w-full text-sm">
                <p className="w-full flex items-center justify-between border-b border-dashed py-2">
                  <span className="font-semibold">Minimum amount</span>
                  <span>$500</span>
                </p>
                <p className="w-full flex items-center justify-between border-b border-dashed py-2">
                  <span className="font-semibold">Maximum amount</span>
                  <span>$3,999</span>
                </p>
                <p className="w-full flex items-center justify-between border-b border-dashed py-2">
                  <span className="font-semibold">Returns</span>
                  <span>180%</span>
                </p>
                <span className="flex items-center justify-center gap-4">
                  <button className="p-2">
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>
                  <button className="p-2">
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
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
                  <h3 className="text-2xl">90</h3>
                  <p className="text-xs text-gray-500">Day(s)</p>
                </span>
              </div>
              <div className="flex flex-col w-full text-sm">
                <p className="w-full flex items-center justify-between border-b border-dashed py-2">
                  <span className="font-semibold">Minimum amount</span>
                  <span>$4,000</span>
                </p>
                <p className="w-full flex items-center justify-between border-b border-dashed py-2">
                  <span className="font-semibold">Maximum amount</span>
                  <span>$9,999</span>
                </p>
                <p className="w-full flex items-center justify-between border-b border-dashed py-2">
                  <span className="font-semibold">Returns</span>
                  <span>270%</span>
                </p>
              </div>
              <span className="flex items-center justify-center gap-4">
                <button className="p-2">
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
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
                <button className="p-2">
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div className="w-full px-4 py-6 shadow-md border border-green-800 flex flex-col items-center gap-6">
              <p class="mt-1 text-center w-full text-sm leading-6 text-gray-500">
                Gold Plan
              </p>
              <div className="w-full flex justify-around items-center">
                <span className="flex flex-col items-center">
                  <h3 className="text-2xl">3.5%</h3>
                  <p className="text-xs text-gray-500">Roi</p>
                </span>
                <span className="text-xs text-gray-500">for</span>
                <span className="flex flex-col items-center">
                  <h3 className="text-2xl">90</h3>
                  <p className="text-xs text-gray-500">Day(s)</p>
                </span>
              </div>
              <div className="flex flex-col w-full text-sm">
                <p className="w-full flex items-center justify-between border-b border-dashed py-2">
                  <span className="font-semibold">Minimum amount</span>
                  <span>$10,000</span>
                </p>
                <p className="w-full flex items-center justify-between border-b border-dashed py-2">
                  <span className="font-semibold">Maximum amount</span>
                  <span>$19,999</span>
                </p>
                <p className="w-full flex items-center justify-between border-b border-dashed py-2">
                  <span className="font-semibold">Returns</span>
                  <span>315%</span>
                </p>
              </div>
              <span className="flex items-center justify-center gap-4">
                <button className="p-2">
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
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
                <button className="p-2">
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlan;
