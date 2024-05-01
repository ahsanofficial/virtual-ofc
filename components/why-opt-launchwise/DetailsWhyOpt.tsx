import Image from "next/image";
import React from "react";
import ClientServedCard from "./ClientServedCard";
import right_arrow from "../../assets/icons/right_arrow.svg";


const DetailsWhyOpt = () => {
  return (
    <div id="DetailsWhyOpt" className="why-opt-launchwise">
    <div  className="container">
      <div className="first-compoent">
        <ClientServedCard/>
      </div>
      <div className="second-component">
        <h2 className="heading">Why Opt for Launchwise?</h2>
        <p className="heading-para">Delegate workspace customization and management to us, allowing you to concentrate on your core business activities while we ensure your workspace is primed for growth.</p>
        <div className="open-accordians">
           <div className="vr-line"></div>
            <div>
              <h3>Prime Nationwide Options</h3>
              <p >Explore our diverse and unparalleled portfolio of office spaces, offering the finest options strategically located across the nation</p>
            </div>
          </div>
         <div className="accordian-container">
            <h3 ><Image src={right_arrow} alt="right arrow" />Comprehensive Office Solutions</h3>
            <h3 ><Image src={right_arrow} alt="right arrow" />Strategically Located Premium Spaces</h3>
            <h3 ><Image src={right_arrow} alt="right arrow" />Cost-Effective Solutions with Modern Amenities</h3>
          </div>
      </div>
    </div>
    </div>
  );
};

export default DetailsWhyOpt;


