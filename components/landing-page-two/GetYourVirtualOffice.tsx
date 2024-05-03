import Image from "next/image";
import React from "react";
import connect_with_regi from "../../assets/icons/landing-page-two/get-you-virtual-office/connect_with_regi.svg";
import get_your_virtual_office from "../../assets/icons/landing-page-two/get-you-virtual-office/get_your_virtual_office.svg";
import give_essential_details from "../../assets/icons/landing-page-two/get-you-virtual-office/give_essential_details.svg";


const GetYourVirtualOffice = () => {
  return (
    <div id="GetYourVirtualOffice" className="page-two-get-your-virtual-office">
      <div className="container ">
        <div className="heading">
          <h2>Get Your Virtual Office Up and Running in <span>3 Easy Steps!</span></h2>
          <p>Procedure to obtain Virtual office address.</p>
        </div>
        <div className="details-section">
              <div className="all-details one">
                <Image src={connect_with_regi} alt="icon" loading="lazy"/>
                <p>Reach out to our friendly customer support team through chat, email, or phone. They'll guide you through the process.</p>
              </div>
              <div className="all-details two">
                <Image src={give_essential_details} alt="icon" loading="lazy"/>
                <p>Upload essential documents required for registration, following our clear and secure guidelines.</p>
              </div>
              <div className="all-details three">
                <Image src={get_your_virtual_office} alt="icon" loading="lazy"/>
                <p>Once your application is approved, your virtual office is activated instantly!</p>
              </div>
        </div>
      </div>
    </div>
  );
};

export default GetYourVirtualOffice;
