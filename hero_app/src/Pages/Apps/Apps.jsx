import React, { Suspense, useState } from "react";
import SingleApp from "../signleApp/singleApp";
import Banner5 from "../../Components/Banner/Banner5";
import Banner4 from "../../Components/Banner/Banner4";

const Apps = ({ data }) => {
  console.log(data);
  const [showAll, setShowAll] = useState(false);

  // show 8 initially, all when button clicked
  const visibleApps = showAll ? data : data.slice(0, 8);

  return (
    <div className=" max-w-[1440px] mx-auto">
      <Banner4></Banner4>

      {/* Jehutu ai data ta array akarea pabo , se jonno map kore ditey pari amra.  */}
      <Suspense fallback={<span>Loading......</span>}>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {visibleApps.map((singleapp) => (
            <SingleApp key={singleapp.id} singleapp={singleapp}></SingleApp>
          ))}
        </div>
      </Suspense>

      <Banner5 showAll={showAll} setShowAll={setShowAll}></Banner5>
    </div>
  );
};

export default Apps;
