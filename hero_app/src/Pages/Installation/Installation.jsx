import React from "react";
import InstallationList from "./InstallationList";

const Installation = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="mt-2 text-gray-500">
          Explore All Trending Apps on the Market developed by us.
        </p>
      </div>
      <InstallationList></InstallationList>
    </div>
  );
};

export default Installation;
