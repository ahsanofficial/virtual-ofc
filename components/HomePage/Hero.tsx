import React from "react";
import Image from "next/image";
import searchIcon from "../../assets/HomePage/search-icon.svg";
import searchDark from "../../assets/HomePage/search-dark.svg";
import delhi from "../../assets/HomePage/new-delhi.svg";
import noida from "../../assets/HomePage/noida.svg";
import bangalore from "../../assets/HomePage/bangalore.svg";
import mumbai from "../../assets/HomePage/mumbai.svg";
import hyderabad from "../../assets/HomePage/hyderabad.svg";
import chennai from "../../assets/HomePage/chennai.svg";

const Hero = () => {
  return (
    <div className="hero-container Hero">
      <div className="heading">
        <p>From a single desk to a whole building. The choice is yours.</p>
        <h1>Discover the Ultimate Workspace Solution</h1>
      </div>
      <form className="form-max d-lg-block d-none">
        <div>
          <div>
            <input type="text" placeholder="Search city" />
            <a href="#">Search Nearby</a>
          </div>
          <button className="btn" type="button">
            <Image src={searchIcon} className="searchIcon" alt="Search icon" />
            SEARCH
          </button>
        </div>
      </form>
      <form className="form-min d-md-block d-lg-none">
        <div>
          <label htmlFor="search">Search your city</label>
          <div>
            <input type="text" />
            <Image src={searchDark} className="search" alt="Search icon" />
          </div>
          <a href="#">Search Nearby</a>
        </div>
      </form>
      <div className="cities">
        <div className="text">Trending cities</div>
        <div className="grid">
          <div>
            <div>
              <Image src={delhi} alt="New Delhi" width={45.63} height={45.63} />
            </div>
            <span>New Delhi</span>
          </div>
          <div>
            <div>
              <Image src={noida} alt="Noida" width={45.63} height={45.63} />
            </div>
            <span>Noida</span>
          </div>
          <div>
            <div>
              <Image
                src={bangalore}
                alt="Bangalore"
                width={45.63}
                height={45.63}
              />
            </div>
            <span>Bangalore</span>
          </div>
          <div>
            <div>
              <Image src={mumbai} alt="Mumbai" width={45.63} height={45.63} />
            </div>
            <span>Mumbai</span>
          </div>
          <div>
            <div>
              <Image
                src={hyderabad}
                alt="Hyderabad"
                width={45.63}
                height={45.63}
              />
            </div>
            <span>Hyderabad</span>
          </div>
          <div>
            <div>
              <Image src={chennai} alt="Chennai" width={45.63} height={45.63} />
            </div>
            <span>Chennai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
