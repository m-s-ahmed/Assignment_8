import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getStoredApp,
  removeFromStoredApp,
} from "../../Utility/addToLocatStorage";
import SingleApp from "../signleApp/singleApp";
import InstallationCard from "./InstallationCard";
import { Toaster } from "react-hot-toast";

const InstallationList = () => {
  const [appList, setAppList] = useState([]);
  const [sort, setSort] = useState(""); //let initial obosthay empty string
  //worst case
  const data = useLoaderData();
  console.log(data);
  //for handling outside effect
  useEffect(() => {
    const storedAppData = getStoredApp();
    //local storage theke string data pabo, kintu main a custom database ar  int
    console.log(storedAppData);
    const convertedStoredApp = storedAppData.map((id) => parseInt(id));
    console.log(convertedStoredApp);
    const myAppList = data.filter((app) => convertedStoredApp.includes(app.id));
    console.log(myAppList);
    setAppList(myAppList);
  }, []);

  //For handleSort
  const handleSort = (type) => {
    setSort(type);
    if (type === "High_To_Low") {
      const sortedBySizeHighToLow = [...appList].sort(
        (a, b) => b.size - a.size
      );
      setAppList(sortedBySizeHighToLow);
      console.log(sortedBySizeHighToLow);
    }

    if (type === "Low_To_High") {
      const sortedBySizeLowToHigh = [...appList].sort(
        (a, b) => a.size - b.size
      );
      setAppList(sortedBySizeLowToHigh);
      console.log(sortedBySizeLowToHigh);
    }
  };

  //For handleuninstall
  const handleUninstall = (id) => {
    //remove from local storage
    removeFromStoredApp(id);
    //remove from our UI state
    const remainingApps = appList.filter((app) => app.id !== id);
    setAppList(remainingApps);
    //using toast message
    alert("App Uninstalled Successfully!");
  };

  return (
    <div className="max-w-[1400px] mx-auto p-5">
      <Toaster />
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-5">{appList.length} Apps Found</h2>
        <details className="dropdown mr-5">
          <summary className="btn m-1">
            Sort By Size : {sort ? sort : ""}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("High_To_Low")}>High To Low</a>
            </li>
            <li>
              <a onClick={() => handleSort("Low_To_High")}>Low To High</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="grid gap-4">
        {appList.length > 0 ? (
          appList.map((singleapp) => (
            <InstallationCard
              key={singleapp.id}
              singleapp={singleapp}
              handleUninstall={handleUninstall}
            ></InstallationCard>
          ))
        ) : (
          <p className="text-gray-500">No apps installed yet.</p>
        )}
      </div>
    </div>
  );
};

export default InstallationList;
