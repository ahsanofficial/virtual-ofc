import React from "react";
import thankyou_virtual_ofc from '../../assets/images/landing-page/free-download/thankyou_vfc.svg'
import Image from "next/image";

const FreeDownload = () => {
  return (
    <div id="Faq" className="free-download">
      <div className="container">
        <div className="typeography-container">
            <h1>FREE DOWNLOAD:</h1>
            <h2>The ultimate checklist for virtual office 2024</h2>
            <p>Discover the step-by-step procedures and essential considerations you need to know before setting up a Virtual Office in India.</p>
            <button>Send Me The Checklist</button>
        </div>
        <div className="img-container">
            <Image src={thankyou_virtual_ofc} alt={thankyou_virtual_ofc} loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default FreeDownload;
