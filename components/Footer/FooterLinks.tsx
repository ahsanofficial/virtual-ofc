import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/assets/images/fullLogo.png'
import facebook from '../../public/assets/icons/facebook.svg'
import instagram from '../../public/assets/icons/instagram.svg'
import linkedin from '../../public/assets/icons/linkedin.svg'
import twitter from '../../public/assets/icons/twitter.svg'
import phone from '../../public/assets/icons/phone.svg'
import email from '../../public/assets/icons/email.svg'
import location from '../../public/assets/icons/location.svg'


const services = [
    {
        id: "services-1",
        text: "Virtual Office",
        link: "/virtual-office",
    },
    {
        id: "services-2",
        text: "GST Registration",
        link: "/gst-registration",
    },
    {
        id: "services-3",
        text: "Coworking Spaces",
        link: "/coworking-space",
    },
    {
        id: "services-4",
        text: "Business Registration",
        link: "/business-registration",
    },
    {
        id: "services-5",
        text: "Mailing Address",
        link: "/mailing-address",
    },
    {
        id: "services-6",
        text: "Dedicated Desk",
        link: "/dedicated-desk",
    },
];
const otherPages = [
    {
        id: "otherPages-1",
        text: "Home",
        link: "/home",
    },
    {
        id: "otherPages-2",
        text: "About Us",
        link: "/about-us",
    },
    {
        id: "otherPages-3",
        text: "Contact Us",
        link: "/contact-us",
    },
    {
        id: "otherPages-4",
        text: "Blog",
        link: "/blog",
    },
    {
        id: "otherPages-5",
        text: "Find Location",
        link: "/find-location",
    },
    {
        id: "otherPages-6",
        text: "FAQs",
        link: "/faqs",
    },
];
const otherLink = [
    {
        id: "otherLink-1",
        text: "Privacy Policy",
        link: "/privacy-policy",
    },
    {
        id: "otherLink-2",
        text: "Disclaimer",
        link: "/disclaimer",
    },
    {
        id: "otherLink-3",
        text: "Terms & Conditions",
        link: "/terms-and-conditions",
    },
    {
        id: "otherLink-4",
        text: "Cookies",
        link: "/cookies",
    },
    {
        id: "otherLink-5",
        text: "Refund Policy",
        link: "/refund-policy",
    },
]

export const FooterLinks = () => {
  return (
    <div className='footer-top'>
        <div className='container'>

            {/* socials */}
            <div className='links'>
                <Link href='/'><Image src={logo} layout="fit" height={40} alt="RegisterKaro"/></Link>
                <div className='social-links'>
                    <a href="www.facebook.com"><Image src={facebook} width={16} height={16} alt="facebook" /></a>
                    <a href="www.instagram.com"><Image src={instagram} width={16} height={16} alt="instagram" /></a>
                    <a href="www.linkedin.com"><Image src={linkedin} width={16} height={16} alt="linkedin" /></a>
                    <a href="www.x.com"><Image src={twitter} width={16} height={16} alt="twitter" /></a>
                </div>
            </div>

            {/* links */}
            <div className='footer-links-container'>
                <div className='footer-links'>
                    <h3>Services</h3>
                    <ul>
                        {services.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='footer-links'>
                    <h3>Other Pages</h3>
                    <ul>
                        {otherPages.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='footer-links'>
                    <h3>Other Link</h3>
                    <ul>
                        {otherLink.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* newsletter */}
            <div className='newsletter'>
                <div className='footer-cta'>
                    <h3>Join the newsletter</h3>
                    <div>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className='contacts'>
                    <h3>Feel free to contact with us</h3>
                    <div className='adjacent-contact-items'>
                        <div className='contact-item'>
                            <Image src={phone} height={24} width={24} alt=''/>
                            <p>+91 93112 21210</p>
                        </div>
                        <div className='contact-item'>
                            <Image src={email} height={24} width={24} alt=''/>
                            <p>virtualoffice@teamco.work</p>
                        </div>
                    </div>
                    <div className='contact-item'>
                        <Image src={location} height={24} width={24} alt=''/>
                        <p>704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana 122007</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
