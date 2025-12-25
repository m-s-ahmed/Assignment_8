import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SingleApp = ({ singleapp }) => {
  console.log(singleapp)
  const { id, title, downloads, ratingAvg, image } = singleapp;
  return (
    <Link to={`/appdetails/${id}`}>
      <section className="bg-white">
        {/* Single Card Design */}
        <div className="bg-white w-full rounded-sm shadow-sm hover:shadow-xl transition">
          <div className="p-3">
            <img className="w-full rounded-sm" src={image} alt="abcd" />
          </div>
          <div className="px-4 pb-4">
            <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
              {title}
            </h3>

            <div className="flex items-center justify-between mt-3 text-xs">
              <span className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded">
                <FaDownload /> {Math.floor(downloads / 100000)}M
              </span>
              <span className="flex items-center gap-1 text-orange-500 bg-orange-50 px-2 py-1 rounded">
                <FaStar /> {ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default SingleApp;
