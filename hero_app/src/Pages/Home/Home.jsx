import React from "react";
import Banner from "../../Components/Banner/Banner";
import Banner2 from "../../Components/Banner/Banner2";
import Banner3 from "../../Components/Banner/Banner3";
import { useLoaderData } from "react-router";
import Apps from "../Apps/Apps";
import App from "../../App";
import Banner4 from "../../Components/Banner/Banner4";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <Banner3></Banner3>
      <Apps data={data}></Apps>
    </div>
  );
};

export default Home;
