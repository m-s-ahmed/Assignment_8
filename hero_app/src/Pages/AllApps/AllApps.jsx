import React, { Suspense, useState } from "react";
import AppBanner1 from "../../Components/AppBanner/AppBanner1";
import { useLoaderData } from "react-router";
import SingleApp from "../signleApp/singleApp";
import notfoundimage from "../../assets/App-Error.png";

const AllApps = () => {
  const allData = useLoaderData();
  console.log(allData);

  //  State to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  //  Filtering , This runs every time searchQuery changes
  const filteredApps = allData.filter((app) =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1400px] mx-auto">
      <AppBanner1></AppBanner1>
      <div className="  m-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Displaying the count of filtered results */}
        <h2 className="font-bold mb-5 lg:mb-0">({filteredApps.length}) Apps Found</h2>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          {/* Bind input to state */}
          <input
            type="search"
            required
            placeholder="Search App"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>
      <Suspense fallback={<span>Loading......</span>}>
        {/* Conditional Rendering: Check if results exist */}
        {filteredApps.length > 0 ? (
          <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredApps.map((singleapp) => (
              <SingleApp key={singleapp.id} singleapp={singleapp}></SingleApp>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <img className=" mx-auto" src={notfoundimage} alt="" />
            <p className="text-xl mt-5">Try adjusting your search criteria.</p>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default AllApps;
