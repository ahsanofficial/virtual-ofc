import Image from "next/image";
import React from "react";
import accenture from "../../assets/icons/trusted-by-largest-companies/accenture.svg";
import blackrook from "../../assets/icons/trusted-by-largest-companies/blackrook.svg";
import disnep from "../../assets/icons/trusted-by-largest-companies/disnep.svg";
import hsbc from "../../assets/icons/trusted-by-largest-companies/hsbc.svg";
import macfee from "../../assets/icons/trusted-by-largest-companies/macfee.svg";
import microsoft from "../../assets/icons/trusted-by-largest-companies/microsoft.svg";
import ntt_group from "../../assets/icons/trusted-by-largest-companies/ntt_group.svg";
import paypal from "../../assets/icons/trusted-by-largest-companies/paypal.svg";
import samsung from "../../assets/icons/trusted-by-largest-companies/samsung.svg";
import slack from "../../assets/icons/trusted-by-largest-companies/slack.svg";
import spotify from "../../assets/icons/trusted-by-largest-companies/spotify.svg";
import uber from "../../assets/icons/trusted-by-largest-companies/uber.svg";

const company_logo = [
  { logo: microsoft },
  { logo: paypal },
  { logo: disnep },
  { logo: samsung },
  { logo: spotify },
  { logo: macfee },
  { logo: ntt_group },
  { logo: blackrook },
  { logo: hsbc },
  { logo: accenture },
  { logo: uber },
  { logo: slack },
];
const TrustedCompanies = () => {
  return (
    <div className="page-two-companies-comp">
      <div id="TrustedCompanies" className="container ">
      <div className="all-items-container">
          <h2>Trusted by the world’s largest companies.</h2>
          <div className="list-comapny-log">
            {company_logo.map((item, index) => (
              <div >
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
      </div> 
    </div>
  );
};

export default TrustedCompanies;
