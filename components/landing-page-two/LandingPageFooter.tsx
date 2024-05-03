import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/assets/images/fullLogo.png'
import rightArrow from '../../public/assets/icons/rightArrow.svg'
import phone from '../../public/assets/icons/phone.svg'
import email from '../../public/assets/icons/email.svg'
import location from '../../public/assets/icons/location.svg'

export const Footer = () => {
  return (
    <footer className='landingpage2-footer'>
        <div className="footer-container">

            <div className='logo'>
                <Link href='/'><Image src={logo} layout="fit" height={50} alt="RegisterKaro"/></Link>
            </div>

            <div className='footer-content-container'>
                <div className='text'>
                    <div>
                        <h3>Speak to our experts</h3>
                        <p>Please don't hesitate to reach out to us. Our team of experts is always available and prepared to address and resolve any inquiries you may have.</p>
                    </div>

                    <button>
                        <p>Enquire now</p>
                        <Image src={rightArrow} alt='' width={12} height={10}/>
                    </button>
                </div>

                <div className='connectwithus'>
                    <div className='adjacent-contactcards'>
                        <div className='contactcard'>
                            <h5>Email</h5>
                            <p>virtualoffice@teamco.work</p>
                            <div>
                                <Image src={email} alt='' width={24} height={24}/>
                            </div>
                        </div>
                        <div className='contactcard'>
                            <h5>Telephone</h5>
                            <p>+91 93112 21210</p>
                            <div>
                                <Image src={phone} alt='' width={24} height={24}/>
                            </div>
                        </div>
                    </div>
                    <div className='contactcard'>
                        <h5>Location</h5>
                        <p>704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana, 122007</p>
                        <div>
                            <Image src={location} alt='' width={24} height={24}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <p>© 2024 - Safe Ledger Private Limited. All rights reserved.</p>
        </div>
        
    </footer>
  )
}
