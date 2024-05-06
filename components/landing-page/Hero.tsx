import React from "react";
import ZohoFormService from "../child_component/ZohoformService";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="hero-head">
        <div>
          <h2>Discover Your Perfect Workspace</h2>
          <h2>Find the Coolest Coworking Spot Nearby!</h2>
        </div>
        <div className="form">
                <ZohoFormService service={'appointment-of-managing-director'} />
            </div>
      </div>
    </div>
  );
};

export default Hero;
