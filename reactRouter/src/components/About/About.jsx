import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white dark:bg-black">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://raw.githubusercontent.com/kunal-tajne/learningphase/main/Operating%20system-rafiki.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12 ">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl  dark:text-white">
            Embracing the Dark Side: A React Website with a Sleek Dark Mode
            </h2>
            <p className="mt-6 text-gray-600  dark:text-white">
              
              In today's digital landscape, where users spend countless hours
              staring at screens, the demand for eye-friendly interfaces has
              become increasingly important.
            </p>
            <p className="mt-4 text-gray-600  dark:text-white">
              Dark mode, a popular design trend, not only adds a touch of
              sophistication to websites but also reduces eye strain and
              improves readability, especially in low-light environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
