import React from "react";
import BitcionChart from "../../components/dashboard parts/BitcionChart";
import LineChart from "../../components/dashboard parts/LineChart";
import MajorDetails from "../../components/dashboard parts/MajorDetails";

const Dashboard = () => {
  return (
    <div className="w-full bg-white h-fit py-[10vh] flex flex-col px-6">
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
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span className="font-semibold text-sm uppercase">Dashboard</span>
      </div>
      {/* section one  */}
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-green-800 mb-6">
        <div className="w-full h-24 bg-slate-100 shadow-md p-4 grid grid-cols-3 grid-rows-2 gap-2">
          <div className="col-span-2 row-span-1 flex justify-end items-center text-xl font-semibold border-b">
            $12,261
          </div>
          <div className="col-span-2 row-span-1 flex justify-end items-center text-sm">
            Account Balance
          </div>
          <div className="col-span-1 row-span-2 flex justify-center items-center row-start-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
          </div>
        </div>
        <div className="w-full h-24 bg-slate-100 shadow-md p-4 grid grid-cols-3 grid-rows-2 gap-2">
          <div className="col-span-2 row-span-1 flex justify-end items-center text-xl font-semibold border-b">
            $28,300
          </div>
          <div className="col-span-2 row-span-1 flex justify-end items-center text-sm">
            Total Deposits
          </div>
          <div className="col-span-1 row-span-2 flex justify-center items-center row-start-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
              />
            </svg>
          </div>
        </div>
        <div className="w-full h-24 bg-slate-100 shadow-md p-4 grid grid-cols-3 grid-rows-2 gap-2">
          <div className="col-span-2 row-span-1 flex justify-end items-center text-xl font-semibold border-b">
            $58,300
          </div>
          <div className="col-span-2 row-span-1 flex justify-end items-center text-sm">
            Total Withdraw
          </div>
          <div className="col-span-1 row-span-2 flex justify-center items-center row-start-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
        <div className="w-full h-24 bg-slate-100 shadow-md p-4 grid grid-cols-3 grid-rows-2 gap-2">
          <div className="col-span-2 row-span-1 flex justify-end items-center text-xl font-semibold border-b">
            $39,300
          </div>
          <div className="col-span-2 row-span-1 flex justify-end items-center text-sm">
            Total Earnings
          </div>
          <div className="col-span-1 row-span-2 flex justify-center items-center row-start-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* section two  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full bg-white shadow-md p-4">
          <LineChart />
        </div>
        <div className="w-full bg-slate-100 shadow-md p-4">
          <MajorDetails />
        </div>
      </div>
      {/* section three  */}
      <div className="w-full lg:grid-cols-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <BitcionChart />
        <div className="w-full h-24 bg-slate-100 shadow-md p-4 grid grid-cols-3 grid-rows-2 gap-2 text-green-800">
          <div className="col-span-2 row-span-1 flex justify-end items-center text-xl font-semibold border-b">
            0
          </div>
          <div className="col-span-2 row-span-1 flex justify-end items-center text-sm">
            Active plans
          </div>
          <div className="col-span-1 row-span-2 flex justify-center items-center row-start-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
