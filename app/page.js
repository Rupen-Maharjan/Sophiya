"use client"

import React, { useState } from "react";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    // main component
    <main className="h-screen w-full flex items-center justify-center relative">
      <div className=" absolute top-20 lg:top-10">
        <h1 className="text-3xl lg:text-6xl text-[#f27e3f] font-semibold">Rupen&#39;s Clothings</h1>
      </div>
      {/* container */}
      <div className="flex relative h-[50%] lg:h-[70%] w-[90%] lg:w-[60%] items-center justify-between bg-[#f1c8b2] rounded-xl overflow-hidden mt-5 lg:mt-24">

        {/* slider */}
        <div
          className={`flex justify-center h-full w-[50%] absolute right-0 z-50 bg-cover bg-center transition-transform duration-500 ${
            showSignup ? "-translate-x-full" : ""
          }`}
          style={{ backgroundImage: 'url("/images/brand.jpg")' }}
        >
          <div className="text-black absolute bottom-7 lg:bottom-20">
            <button
              className={`relative z-0 ${
                showSignup ? "flex" : "hidden"
              } items-center gap-2 overflow-hidden rounded-lg border-[1px] border-black px-2 py-[0.4rem] lg:px-4 lg:py-2 font-semibold uppercase text-black transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#f1c8b2] before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[#a44817] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`}
              onClick={toggleForm}
            >
              Login
            </button>

            <button
              className={`relative z-0 ${
                showSignup ? "hidden" : "flex"
              } items-center gap-2 overflow-hidden rounded-lg border-[1px] border-black px-2 py-[0.4rem] lg:px-4 lg:py-2 font-semibold uppercase text-black transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#f1c8b2] before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[#a44817] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`}
              onClick={toggleForm}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Wrapping div */}
        <div
          className={`flex justify-between h-full items-center w-[90%] mx-auto transition-transform duration-500 space-x-2`}
        >
          {/* login form */}
          <div className=" space-y-5">
          <h1 className="text-3xl lg:text-6xl text-[#f27e3f] font-semibold">Login</h1>
            <form action="" className="space-y-5">
              <div className="bg-white py-2 px-4 lg:py-5 lg:px-7 rounded-xl lg:w-96">
                <input
                  autoComplete="off"
                  className="w-full focus:outline-none text-black"
                  placeholder="Username"
                  type="text"
                  name="username"
                />
              </div>

              <div className="bg-white py-2 px-4 lg:py-5 lg:px-7 rounded-xl lg:w-96">
                <input
                  autoComplete="off"
                  className="w-full focus:outline-none text-black"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>

              <button
                type="submit"
                className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] border-black px-2 lg:px-4 py-[0.4rem] lg:py-2 font-semibold uppercase text-black transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#f27e3f] before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[#f1c8b2] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95"
              >
                Login
              </button>
            </form>
          </div>

          {/* SignUp form */}
          <div className=" space-y-5">
            <h1 className="text-3xl lg:text-6xl text-[#f27e3f] font-semibold">Sign Up</h1>
            <form action="" className="space-y-5">
              <div className="bg-white py-2 px-4 lg:py-5 lg:px-7 rounded-xl lg:w-96">
                <input
                  autoComplete="off"
                  className="w-full focus:outline-none text-black"
                  placeholder="Email"
                  type="text"
                  name="email"
                />
              </div>

              <div className="bg-white py-2 px-4 lg:py-5 lg:px-7 rounded-xl lg:w-96">
                <input
                  autoComplete="off"
                  className="w-full focus:outline-none text-black"
                  placeholder="Username"
                  type="text"
                  name="username"
                />
              </div>

              <div className="bg-white py-2 px-4 lg:py-5 lg:px-7 rounded-xl lg:w-96">
                <input
                  autoComplete="off"
                  className="w-full focus:outline-none text-black"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>

              <button
                type="submit"
                className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] border-black px-2 lg:px-4 py-[0.4rem] lg:py-2 font-semibold uppercase text-black transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#f27e3f] before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[#f1c8b2] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
