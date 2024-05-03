import React from "react";
import ZohoFormService from "../child_component/ZohoformService";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="hero-head">
        <h1>
          Work From Anywhere, Grow Everywhere. Get Your Instant Virtual Office
        </h1>
        <div className="form">
                <ZohoFormService service={'appointment-of-managing-director'} />
            </div>
      </div>
    </div>
  );
};

export default Hero;
