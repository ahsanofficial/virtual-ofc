import React from "react";
import Image from "next/image";
import userBlack from "../../assets/icons/landing-page/user-black.svg";
import userWhite from "../../assets/icons/landing-page/user-white.svg";

const HeroBottom = () => {
  return (
    <div className="hero-bottom-box">
      <div className="hero-box">
        <div>
          <Image src={userBlack} alt="User" />
          <h3>Seamless connectivity</h3>
          <p>Seamless connectivity anywhere in India for uninterrupted workflow and collaboration.</p>
        </div>
        <div>
          <Image src={userBlack} alt="User" />
          <h3>Professional Image</h3>
          <p>Project professionalism with our prestigious business address and phone answering services.</p>
        </div>
        <div style={{ backgroundColor: "#23A6F0", color: "#FFFFFF" }}>
          <Image src={userWhite} alt="User" />
          <h3>Flexible Solutions</h3>
          <p>Tailored virtual office plans offer flexibility to scale as your business grows.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
