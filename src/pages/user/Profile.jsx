import React from "react";
import DeleteAccount from "../../components/modals/DeleteAccount";
import UpdatePicture from "../../components/modals/UpdatePicture";
import UpdateProfile from "../../components/modals/UpdateProfile";

const Profile = () => {
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
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="font-semibold text-sm uppercase">user profile</span>
      </div>
      {/* section one  */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 text-green-800 mb-6">
        <div className="w-full bg-white border shadow-md p-4 pt-40 flex flex-col relative items-center">
          <span className="absolute -top-2 left-6 flex items-center w-11/12">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="w-32 h-32 rounded-xl shadow-lg"
            />
            <div className="w-full h-20 grid grid-cols-3 grid-rows-2 gap-2">
              <div className="col-span-3 row-span-1 flex justify-end items-center text-xl font-semibold border-b">
                Leslie Alexander
              </div>
              <div className="col-span-3 row-span-1 flex justify-end items-center">
                Misslesly
              </div>
            </div>
          </span>
          <p class="mt-1 text-left w-full text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
          <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
            <span className="font-semibold">Full Name:</span>
            <span>Leslie Alexander</span>
          </div>
          <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
            <span className="font-semibold">Email Address:</span>
            <span>lesliealexander@gmail.com</span>
          </div>
          <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
            <span className="font-semibold">Username:</span>
            <span>Misslesly</span>
          </div>
          <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
            <span className="font-semibold">Date of birth:</span>
            <span>16/02/1989</span>
          </div>
          <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
            <span className="font-semibold">Age:</span>
            <span>34</span>
          </div>
          <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
            <span className="font-semibold">Gender:</span>
            <span>Female</span>
          </div>
          <div className="p-3 flex w-full justify-between items-center text-green-800 text-sm">
            <span className="font-semibold">Country:</span>
            <span>United States of america</span>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-4 gap-6">
          <div className="w-full col-span-1 h-24 bg-slate-100 shadow-md p-4 grid grid-cols-3 grid-rows-2 gap-2">
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
          <div className="w-full col-span-1 h-24 bg-slate-100 shadow-md p-4 grid grid-cols-3 grid-rows-2 gap-2 text-green-800">
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
          <div className="w-full bg-white border shadow-md p-8 col-span-1 lg:col-span-2 row-span-2 flex flex-col items-center justify-center gap-4">
            <p class="mt-1 w-full text-center text-sm leading-6 text-gray-500">
              Account settings.
            </p>
            <ul className="list-disc">
              <li className="w-full">
                To edit your account information{" "}
                <UpdateProfile/>
              </li>
              <li className="w-full">
                To update your profile picture{" "}
                <UpdatePicture/>
              </li>
              <li className="w-full">
                To delete your account{" "}
                <DeleteAccount/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
