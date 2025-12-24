import React from "react";

const Banner3 = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 p-10 justify-center bg-linear-to-t from-violet-500 to-indigo-500">
      <h1 className="text-white font-bold text-3xl text-center">
        Trusted by Millions, Built for You
      </h1>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-[1440px] mx-auto">
        <div className="text-center">
          <p className="text-white">Total Downloads</p>
          <p className="text-4xl text-white font-bold">29.6M</p>
          <p className="text-white">21% More Than Last Month</p>
        </div>
        <div className="text-center">
          <p className="text-white">Total Reviews</p>
          <p className="text-4xl text-white font-bold">906K</p>
          <p className="text-white">48% More Than Last Month</p>
        </div>
        <div className="text-center">
          <p className="text-white">Active Apps</p>
          <p className="text-4xl text-white font-bold">132+</p>
          <p className="text-white">31 More Will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
