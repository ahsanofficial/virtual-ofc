import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/HomePage/logo.svg";
import downArrow from "../../assets/HomePage/down-arrow.svg";
import phone from "../../assets/HomePage/phone.svg";
import user from "../../assets/HomePage/user.svg";
import Link from "next/link";

const Header = () => {
  const [isopen, setIsopen] = useState(false);
  const links = [
    {
      name: "Workspace & Services",
      link: "/",
      dropdownImg: <Image src={downArrow} alt="Down Arrow" />,
      submenu: true,
      sublinks: [
        {
          head: "Business Registration",
          sublink: [
            { name: "Private Limited Company Registration", link: "/" },
            { name: "Public Limited Comapany Registration", link: "/" },
            { name: "LLP Registration", link: "/" },
          ],
        },
      ],
    },
    { name: "Get started", link: "/", submenu: false },
    {
      name: "More",
      link: "/",
      dropdownImg: <Image src={downArrow} alt="Down Arrow" />,
      submenu: true,
      sublinks: [
        {
          head: "Business Registration",
          sublink: [
            { name: "Private Limited Company Registration", link: "/" },
            { name: "Public Limited Comapany Registration", link: "/" },
            { name: "LLP Registration", link: "/" },
          ],
        },
      ],
    },
    { name: "Help", link: "/", submenu: false },
  ];
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
          {links?.map((link, index) => (
            <li key={index}>
              <Link href={link.link}>{link.name}</Link>
              {link.submenu && link.dropdownImg}
              {link.sublinks?.map((sublinks, index) => (
                <div className="sublinks" key={index}>
                  <h1>{sublinks.head}</h1>
                  <hr />
                  <span>
                    {sublinks.sublink.map((slink, index) => (
                      <Link href={slink.link} key={index}>
                        {slink.name}
                      </Link>
                    ))}
                  </span>
                </div>
              ))}
            </li>
          ))}
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
          {links?.map((link, index) => (
            <li key={index}>
              <Link href={link.link}>{link.name}</Link>
              {link.submenu && link.dropdownImg}
              {link.sublinks?.map((sublinks, index) => (
                <div className="sublinks" key={index}>
                  <h1>{sublinks.head}</h1>
                  <hr />
                  <span>
                    {sublinks.sublink.map((slink, index) => (
                      <Link href={slink.link} key={index}>
                        {slink.name}
                      </Link>
                    ))}
                  </span>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
