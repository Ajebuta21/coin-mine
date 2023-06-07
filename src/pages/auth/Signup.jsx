import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full bg-slate-200 min-h-screen py-28 flex justify-center items-center px-2">
      <form className="w-full md:w-2/3 lg:w-1/3 bg-white px-2 py-10 rounded-md shadow-lg flex flex-col gap-2 items-center text-green-800 text-sm">
        <Link to="/" className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
          <span className="text-xl">CoinMine</span>
        </Link>
        <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-gray-500">
          Sign in to your account
        </h2>
        <div className="w-full flex gap-2">
          <div className="w-full relative group">
            <label className="text-xs pl-4">First name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
            />
          </div>
          <div className="w-full relative group">
            <label className="text-xs pl-4">Last name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
            />
          </div>
        </div>
        <div className="w-full relative group">
          <label className="text-xs pl-4">Email Address</label>
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
          />
        </div>
        <div className="w-full relative group">
          <label className="text-xs pl-4">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
          />
        </div>
        <div className="w-full relative group max-sm:flex max-sm:justify-between max-sm:items-center">
          <label className="text-xs pl-4">Date of birth</label>
          <input
            type="date"
            className="w-full  max-sm:w-1/2 p-2 border rounded-md outline-none group-focus-within:border-green-800"
          />
        </div>
        <div className="w-full relative group">
          <label className="text-xs pl-4">Gender</label>
          <select className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800 appearance-none">
            <option value={""} disabled selected>
              --Select your gender--
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className="w-full relative group">
          <label className="text-xs pl-4">Country</label>
          <select className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800 appearance-none">
            <option value={""} disabled selected>
              --Select your country--
            </option>
            <option value="United States of America">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kindgom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div className="w-full flex gap-2">
          <div className="w-full relative group">
            <label className="text-xs pl-4">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
            />
          </div>
          <div className="w-full relative group">
            <label className="text-xs pl-4">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-2 border rounded-md outline-none group-focus-within:border-green-800"
            />
          </div>
        </div>
        <button className="w-full p-2 bg-gradient-to-b from-green-700 to-green-800 shadow-md rounded-md text-white hover:from-green-600 hover:to-green-700 transition ease-in-out duration-300">
          Create Account
        </button>
        <p className="text-xs">
          Already have an account?{" "}
          <Link to="/login" className="text-gray-500">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
