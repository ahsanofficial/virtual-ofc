import Image from "next/image";
import React from "react";
import dabur_logo from '../../../assets/icons/landing-page-two/carousel/dabur_log.svg'

const ClientComponent = () => {
  return (
    <div>
      <h2>Client Testimonial </h2>
      <div className="details-container">
        <Image src={dabur_logo} alt="Dabur Log" loading="lazy" />
        <div className="para">
            <p>The LaunchWise team is very professional and 100% transparent. We would surely recommend them to everyone who wants to have a new business setup or those who already have a company. Their experts are thorough with all corners of business. They have surely earned us as their permanent client.</p>
             <div className="writer"><div className="line"></div><h5>Sunil Duggal, CEO, Dabur Healthcare</h5></div>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;
