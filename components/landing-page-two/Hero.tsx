import React from "react";
import Image from "next/image";
import greenYes from "../../assets/icons/landing-page-two/green-yes.svg";

const Hero = () => {
  return (
    <div className="hero-landing-two">
      <div className="hero-content">
        <div>
          <h1>
            Work From Anywhere, Grow Everywhere Get Your Instant Virtual
            Office
          </h1>
          <p>
            To Provide Business solutions to the "entrepreneurs, by shifting
            their conventional" mindset and enabling them to scale business
            without incurring bad cost. <br/>Join us to unlock your virtual office
            and empower your business!
          </p>
        </div>
        <div className="form-div"></div>
      </div>
      <div className="hero-bottom">
        <div>
          <Image src={greenYes} alt="Green Yes" />
          <h3>Unleash Flexibility</h3>
        </div>
        <div>
          <Image src={greenYes} alt="Green Yes" />
          <h3>Simplify Operations</h3>
        </div>
        <div>
          <Image src={greenYes} alt="Green Yes" />
          <h3>Boost Credibility</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
