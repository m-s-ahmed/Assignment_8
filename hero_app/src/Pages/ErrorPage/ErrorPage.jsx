import React from "react";
import errorimage from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className=" w-full mx-auto text-center">
      <img src={errorimage} alt="" />
      <h1>Oops, Page Not Found</h1>
      <p>This page you are looking for is not available</p>
      <Link to="/">
        <button className="btn btn-primary">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
