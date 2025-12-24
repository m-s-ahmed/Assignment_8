import React from "react";

const SingleApp = ({ singleapp }) => {
  const { title, downloads, ratingAvg, image } = singleapp;
  return (
    <section class="bg-white">
      {/* Single Card Design */}
      <div class="bg-white w-full rounded-sm shadow-sm hover:shadow-xl transition">
        <div class="p-3">
          <img className="w-full rounded-sm" src={image} alt="abcd" />
        </div>
        <div class="px-4 pb-4">
          <h3 class="text-sm font-semibold text-slate-900 line-clamp-2">
            {title}
          </h3>

          <div class="flex items-center justify-between mt-3 text-xs">
            <span class="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded">
              ⬇ {Math.floor(downloads / 100000)}M
            </span>
            <span class="flex items-center gap-1 text-orange-500 bg-orange-50 px-2 py-1 rounded">
              ⭐ {ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleApp;
