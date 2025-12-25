import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
const RatingChart = ({ ratings }) => {
  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-4">Ratings</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[...ratings].reverse()} layout="vertical">
            <XAxis type="number" />
            <YAxis
              dataKey="name"
              type="category"
              width={70}
              tick={{ fill: "#555" }}
            />
            <Bar dataKey="count" fill="#ff8c00" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingChart;
