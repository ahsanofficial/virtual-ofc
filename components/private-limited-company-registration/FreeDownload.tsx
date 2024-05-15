import React from "react";
import book from "../../assets/images/private-limited-company-registration/free-download/book.svg";
import google from '../../assets/icons/private-limited-company-registration/Hero/google.svg'
import star from '../../assets/icons/private-limited-company-registration/Hero/star.svg'
import Image from "next/image";

const FreeDownload = () => {
  return (
    <div id="Faq" className="p-three-free-download">
      <div className="container">
        <div className="content-container">
          <div className="typeography-container">
            <h1>FREE DOWNLOAD:</h1>
            <h2>THE ULTIMATE CHECKLIST FOR COMPANY REGISTRATION 2024</h2>
            <p>
              Discover the step-by-step procedures and Essential considerations
              you need to know Before setting up a company in India.
            </p>
          </div>
          <div className="img-container">
            <Image src={book} alt="thank you book" loading="lazy" />
          </div>
        </div>
        <div className='user-reviews'>
                    
                        <Image src={google} width={64} height={64} className="googleImg" alt="Google" />
                        <div className="box">
                        <Image src={star} alt="Star" className='review-star' />
                        <span><p className="mt-3 ms-1">4.7/5 </p><div className="line "></div></span>
                        
                        </div>
                        <p className="mt-3">15.7K+ Happy Reviews</p>
                    
                </div>
        <button>DOWNLOAD E-BOOK NOW</button>
      </div>
     
    </div>
  );
};

export default FreeDownload;
