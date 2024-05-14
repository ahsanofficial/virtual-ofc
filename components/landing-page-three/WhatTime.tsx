import Image from "next/image";
import bg_banner from "../../assets/images/landing-page-three/what-time-it-is/banner.svg"
import man_banner from "../../assets/images/landing-page-three/what-time-it-is/man-banner.png"

const WhatTime = () => {
  return (
    <div className="p-three-what-time-container">
      <div className="container">
        <div className="heading">
          <h2>What is the time required for<span> Registering a Company ?</span> </h2>
          <div className="line"></div>
          <p>On an average it takes around <span>7-10 working days </span> to register a private limited company in india  subject to document verification by MCA .</p>
        </div>
      </div>
        <div className="cards">  
        </div>
    </div>
  );
};

export default WhatTime;
