import Image from 'next/image'
import React from 'react'
import footerbg from '../../../assets/images/landing-page/footer/landingpage-footerbg.jpeg'
import { ConnectwithUs } from '../../Footer/ConnectwithUs'
import Link from 'next/link'
import logo from '../../../public/assets/images/fullLogo.png'
import facebook from '../../../public/assets/icons/facebook.svg'
import instagram from '../../../public/assets/icons/instagram.svg'
import linkedin from '../../../public/assets/icons/linkedin.svg'
import twitter from '../../../public/assets/icons/twitter.svg'

export const Footer = () => {
  return (
    <div className='landingpage-footer'>
        <Image
            src={footerbg}
            alt="Background Image"
            layout="fill"
            objectPosition="center"
            priority={true}
            className="background-image"
        />
        <div className='footer-content-container'>
            <div className='form-container'>
                
            </div>

            <div className='links-and-contacts'>
                <div className='logo'>
                    <Link href='/'><Image src={logo} layout="fit" height={50} alt="RegisterKaro"/></Link>
                </div>
                <div className='footer-connectwithus'>
                    <h3>Feel free to contact with us</h3>        
                    <ConnectwithUs />
                </div>
                <div className='social-links'>
                    <a href="www.facebook.com"><Image src={facebook} width={16} height={16} alt="facebook" /></a>
                    <a href="www.instagram.com"><Image src={instagram} width={16} height={16} alt="instagram" /></a>
                    <a href="www.linkedin.com"><Image src={linkedin} width={16} height={16} alt="linkedin" /></a>
                    <a href="www.x.com"><Image src={twitter} width={16} height={16} alt="twitter" /></a>
                </div>
            </div>

            <div className='map-container'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.4051373460798!2d77.0546507868693!3d28.47228495204313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19aaf14f6d8f%3A0x62c146a0de5775b4!2sPalm%20Court%2C%20Mehrauli%20Rd%2C%20Industrial%20Development%20Area%2C%20Sector%2016%2C%20Gurugram%2C%20Haryana%20122007!5e0!3m2!1sen!2sin!4v1714631514796!5m2!1sen!2sin"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='map-iframe'
                ></iframe>
            </div>
        </div>
        <div className='copyright'>
            <p>© 2024 - Safe Ledger Private Limited. All rights reserved.</p>
        </div>
    </div>
  )
}
