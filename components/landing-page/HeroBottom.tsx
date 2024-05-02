import React from 'react'
import Image from "next/image";
import userBlack from "../../assets/icons/landing-page/user-black.svg";
import userWhite from "../../assets/icons/landing-page/user-white.svg";

const HeroBottom = () => {
  return (
    <div className="hero-box">
        <div>
            <Image src={userBlack} alt="User" />
            <h3>Unleash Flexibility</h3>
            <p>Work from anywhere in India with a prestigious virtual address.</p>
        </div>
        <div>
            <Image src={userBlack} alt="User" />
            <h3>Simplify Operations</h3>
            <p>Get a mailing address, access GST registration, and enjoy streamlined services.</p>
        </div>
        <div style={{backgroundColor: "#23A6F0", color: "#FFFFFF"}}>
            <Image src={userWhite} alt="User" />
            <h3>Boost Credibility</h3>
            <p>Project a professional image and attract top talent nationwide.</p>
        </div>
    </div>
  )
}

export default HeroBottom
