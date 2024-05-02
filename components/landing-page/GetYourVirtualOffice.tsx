import Image from "next/image";
import React from "react";
import connect_with_regi from "../../assets/icons/landing-page/get-you-virtual-office/connect_with_regi.png";
import get_your_virtual_office from "../../assets/icons/landing-page/get-you-virtual-office/get_your_virtual_office.svg";
import give_essential_details from "../../assets/icons/landing-page/get-you-virtual-office/give_essential_details.svg";
import des_top_arrow from "../../assets/icons/landing-page/get-you-virtual-office/des_top_arrow.svg";
import des_down_arrow from "../../assets/icons/landing-page/get-you-virtual-office/des_down_arrow.svg";


const GetYourVirtualOffice = () => {
  return (
    <div id="GetYourVirtualOffice" className="get-your-virtual-office">
      <div className="container ">
        <div className="heading">
          <Image src={connect_with_regi} alt="hello"/>
          <h2>Get Your Virtual Office Up and Running in <span>3 Easy Steps!</span></h2>
          <p>Procedure to obtain Virtual office address.</p>
        </div>
        <div>
        <div className="details-section">
              <div className="all-details one">
                <Image src={get_your_virtual_office} alt="icon" loading="lazy"/>
                <h5>Connect With RegisterKaro</h5>
                <p>Reach out to our friendly customer support team through chat, email, or phone. They'll guide you through the process.</p>
              </div>
              <Image src={des_top_arrow} className="arrows top"  alt="arrow top"/>
              <div className="all-details two">
                <Image src={get_your_virtual_office} alt="icon" loading="lazy"/>
                <h5>Give Essential Details & Documents</h5>
                <p>Upload essential documents required for registration, following our clear and secure guidelines.</p>
              </div>
              <Image src={des_down_arrow} className="arrows down" alt="arrow top"/>
              <div className="all-details three">
                <Image src={get_your_virtual_office} alt="icon" loading="lazy"/>
                <h5>Get Your Virtual Office Ready To Work</h5>
                <p>Once your application is approved, your virtual office is activated instantly!</p>
              </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default GetYourVirtualOffice;
