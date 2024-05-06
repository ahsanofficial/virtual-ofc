import Image from "next/image";
import React from "react";
import connect_with_regi from "../../assets/icons/landing-page/get-you-virtual-office/connect_with_regi.svg";
import get_your_virtual_office from "../../assets/icons/landing-page/get-you-virtual-office/get_your_virtual_office.svg";
import give_essential_details from "../../assets/icons/landing-page/get-you-virtual-office/give_essential_details.svg";
import des_top_arrow from "../../assets/icons/landing-page/get-you-virtual-office/des_top_arrow.svg";
import des_down_arrow from "../../assets/icons/landing-page/get-you-virtual-office/des_down_arrow.svg";


const GetYourVirtualOffice = () => {
  return (
    <div id="GetYourVirtualOffice" className="get-your-virtual-office">
      <div className="container ">
        <div className="heading">
          <h2>Set Up your Virtual Office Now in Just <span>3 Simple Steps!</span></h2>
          <p>Procedure to obtain Virtual office address.</p>
        </div>
        <div>
        <div className="details-section">
              <div className="all-details one">
                <Image src={connect_with_regi} alt="icon" loading="lazy"/>
                <h5>Explore Locations & Customize Filters</h5>
                <p>Begin by selecting your desired location and refining your search with specific filters tailored to your preferences, such as amenities, pricing, or size requirements.</p>
              </div>
              <Image src={des_top_arrow} className="arrows top"  alt="arrow top"/>
              <div className="all-details two">
                <Image src={give_essential_details} alt="icon" loading="lazy"/>
                <h5>Discover & Compare Ideal Coworking Spaces</h5>
                <p>Browse through the search results to find the best coworking spaces that meet your criteria. Compare options based on features, location proximity, and user reviews to determine the most suitable choice for your needs.</p>
              </div>
              <Image src={des_down_arrow} className="arrows down" alt="arrow top"/>
              <div className="all-details three">
                <Image src={get_your_virtual_office} alt="icon" loading="lazy"/>
                <h5>Submit Your Enquiry and Secure Your Spot</h5>
                <p>Once you've found the perfect coworking space, proceed to submit your inquiry. Provide necessary details and any additional requirements. This step finalizes your reservation process, securing your spot in the chosen coworking space.</p>
              </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default GetYourVirtualOffice;
