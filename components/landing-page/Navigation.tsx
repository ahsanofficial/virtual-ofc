import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/HomePage/logo.svg";
import rightArrow from "../../assets/icons/landing-page/right-arrow.svg";
import phone from "../../assets/icons/landing-page/phone.svg";
import user from "../../assets/icons/landing-page/user.svg";

const Navigation = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <header className="navigation-container Navigation">
      <Image
        src={logo}
        alt="Register Karo Logo"
        objectFit="cover"
        objectPosition="center"
        height={40}
        width={225}
      />
      <div className="navigation-links">
        <nav>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button type="button" className="enquire-button">
          <span>Enquire now</span>
          <Image src={rightArrow} alt="Right Arrow"  />
        </button>
      </div>
      <div className="icons d-lg-none d-lg-block">
        <Image src={phone} alt="Phone" />
        <Image src={user} alt="User" />
        {isopen ? (
          <span
            className="close"
            onClick={() => setIsopen(!isopen)}
          >
            &times;
          </span>
        ) : (
          <div
            onClick={() => {
              setIsopen(true);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
      <nav
        className={`navigation`}
        style={isopen ? { right: "0px" } : { right: "-100%" }}
      >
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
