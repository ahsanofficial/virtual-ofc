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
            <div className="right">
            <div className='user-reviews'>
                        
                            <Image src={google} width={64} height={64} className="googleImg" alt="Google" />
                            <p className="d-flex "><Image src={star} alt="Star" className='review-star' /> 4.7/5 <div className="line"></div>15.7K+ Happy Reviews</p>
                        
                    </div>
            <button>DOWNLOAD E-BOOK NOW</button>
        </div>
          </div>
          <div className="img-container">
            <Image src={book} alt="thank you book" loading="lazy" />
          </div>

          <div className='new-right'>
                        <div className="box">
                          <Image src={google} width={64} height={64} className="googleImg mb-2" alt="Google" />
                          <p className="d-flex all-p"><Image src={star} alt="Star" className='review-star mt-1 me-2' /> 4.7/5 <div className="line"></div>15.7K+ Happy Reviews</p>
                        </div>
                       <button>DOWNLOAD E-BOOK NOW</button>
                </div>


          
        </div>

        
      </div>
     
    </div>
  );
};

export default FreeDownload;
