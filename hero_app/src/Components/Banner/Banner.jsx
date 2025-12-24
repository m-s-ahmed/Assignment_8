import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-[800px]">
          <h1 className="text-5xl font-bold">
            We Build
            <br />
            <span className="text-purple-700">Productive</span> Apps
          </h1>
          <p className="py-6 text-center text-gray-500">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-center gap-x-5">
            <a href="https://play.google.com/store/games?hl=en" target="_blank">
              <button className="btn btn-soft btn-primary">
                <FaGooglePlay />
                Google Play
              </button>
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank">
              <button className="btn btn-soft btn-primary">
                <FaAppStore />
                App Store
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
