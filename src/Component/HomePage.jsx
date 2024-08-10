import React from "react";
import Button from "./Button";
import SmallContent from "./SmallContent";

const HomePage = () => {
  return (
    <div className="main-div flex flex-col items-center justify-center mb-28">
      <div className="landing-img my-10">
        <img
          src="https://zerodha.com/static/images/landing.png"
          className="max-h-96"
          alt=""
        />
      </div>
      <SmallContent 
      heading="Invest in everything"
      para="Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more."
      />
    </div>
  );
};

export default HomePage;
