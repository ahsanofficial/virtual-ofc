import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/HomePage/logo.svg";
import downArrow from "../../assets/HomePage/down-arrow.svg";
import phone from "../../assets/HomePage/phone.svg";
import user from "../../assets/HomePage/user.svg";

const Header = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <header className="header-container Header">
      <Image
        src={logo}
        alt="Register Karo Logo"
        objectFit="cover"
        objectPosition="center"
        className="logo-image"
        height={88.54}
        width={123.72}
      />
      <nav className="navigation-links">
        <ul>
          <li>
            <span>Workspace & Services</span>
            <Image src={downArrow} alt="Down Arrow" />
          </li>
          <li>Get started</li>
          <li>
            <span>More</span>
            <Image src={downArrow} alt="Down Arrow" />
          </li>
          <li>Help</li>
        </ul>
      </nav>
      <div>
        <Image src={phone} alt="Phone" />
        <Image src={user} alt="User" />
        <button type="button" className="enquire-button">
          ENQUIRE NOW
        </button>
        {isopen ? (
          <span
            className="close d-xl-none d-lg-block"
            onClick={() => setIsopen(!isopen)}
          >
            &times;
          </span>
        ) : (
          <div
            className="d-xl-none d-lg-block"
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
          <li>
            <span>Workspace&Services</span>
            <Image src={downArrow} alt="Down Arrow" />
          </li>
          <li>Get started</li>
          <li>
            <span>More</span>
            <Image src={downArrow} alt="Down Arrow" />
          </li>
          <li>Help</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
