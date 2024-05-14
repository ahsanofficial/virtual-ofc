import React from "react";
import book from '../../assets/images/landing-page-three/free-download/book.svg'
import Image from "next/image";

const FreeDownload = () => {
  return (
    <div id="Faq" className="p-three-free-download">
      <div className="container">
        <div className="typeography-container">
            <h1>FREE DOWNLOAD:</h1>
            <h2>THE ULTIMATE CHECKLIST FOR COMPANY REGISTRATION 2024</h2>
            <p>Discover the step-by-step procedures and
        Essential considerations you need to know
          Before setting up a company in India.</p>
            <button>DOWNLOAD E-BOOK NOW</button>
        </div>
        <div className="img-container">
            <Image src={book} alt='thank you book' loading="lazy"/>
        </div>
        <button className="outer-btn">DOWNLOAD E-BOOK NOW</button>
      </div>
    </div>
  );
};

export default FreeDownload;
