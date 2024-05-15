import Image from "next/image";
import React from "react";
import adobe from "../../assets/icons/private-limited-company-registration/grow-your-business/adobe.svg"
import goDaddy from "../../assets/icons/private-limited-company-registration/grow-your-business/goDaddy.svg"
import icici from "../../assets/icons/private-limited-company-registration/grow-your-business/icici.svg"
import oyo from "../../assets/icons/private-limited-company-registration/grow-your-business/oyo.svg"
import razorpay from "../../assets/icons/private-limited-company-registration/grow-your-business/razorpay.svg"
import slack from "../../assets/icons/private-limited-company-registration/grow-your-business/slack.svg"
import wework from "../../assets/icons/private-limited-company-registration/grow-your-business/wework.svg"
import zoho from "../../assets/icons/private-limited-company-registration/grow-your-business/zoho.svg"
import rightArrow from "../../assets/icons/private-limited-company-registration/grow-your-business/rightArrow.svg"

const company_logo = [
  { logo: zoho },
  { logo: icici },
  { logo: goDaddy },
  { logo: razorpay },
  { logo: oyo },
  { logo: adobe },
  { logo: wework },
  { logo: slack },

];
const GrowYourBusiness = () => {
  return (
    <div className="p-three-grow-your-business">
    <div className="container">
      <div className="heading">
          <h2>Grow Your Business With Offers From Our <span>PARTNERS</span> </h2>
          <p>We have teamed up  with some of the top business brands in the world to give our customers a range of special offers and discounts.</p>
          <div className="line"></div>
        </div>
      <div className="all-items-container">
          <div className="list-comapny-log">
            {company_logo.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.logo}
                  className="icons"
                  alt={item.logo}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
          <button>Get in Touch <Image src={rightArrow} alt="arrow"/></button>
      </div> 
    </div>
  );
};

export default GrowYourBusiness;
