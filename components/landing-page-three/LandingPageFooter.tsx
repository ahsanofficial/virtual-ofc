import Image from 'next/image'
import React from 'react'
import telephonelg from '../../assets/images/landing-page-three/telephone-lg-screen.png'
import telephonesm from '../../assets/images/landing-page-three/telephone-sm-screen.png'
import email from '../../assets/images/landing-page-three/icon-park-outline_email-down.svg'
import phone from '../../assets/images/landing-page-three/iconoir_phone-income.svg'
import location from '../../assets/images/landing-page-three/fa6-solid_map-location.svg'
import facebook from '../../assets/images/landing-page-three/facebook.svg'
import instagram from '../../assets/images/landing-page-three/instagram.svg'
import linkedin from '../../assets/images/landing-page-three/linkedin.svg'
import youtube from '../../assets/images/landing-page-three/youtube.svg'
import twitter from '../../assets/images/landing-page-three/twitter.svg'


export const Footer = () => {
  return (
    <footer className='landingpage3-footer'>
      <div className="container">
        <div className='hanging-tel-lg'>
          <Image src={telephonelg.src} alt='logo' width={106} height={184} />
        </div>
        <div className='hanging-tel-md'>
          <Image src={telephonesm.src} alt='logo' width={58} height={70} />
        </div>
        

        <div className='heading'>
          <div>
            <h3>Speak to <span>our experts</span></h3>
            <div className='hanging-tel-sm'>
              <Image src={telephonesm.src} alt='logo' width={58} height={70} />
            </div>
          </div>
          <p>"Contact Our Team of Experts for Tailored Solutions and Expert Guidance on Your Business Journey."</p>
        </div>

        <div className='reach-out'>
          <div className='reach-card'>
            <div>
              <Image src={email} alt='email' width={50}/>
            </div>
            <h5>E-mail</h5>
            <p>registerkaro.com</p>
          </div>
          <div className='reach-card'>
            <div>
              <Image src={phone} alt='phone' width={50}/>
            </div>
            <h5>Phone number</h5>
            <p>1234567890</p>
          </div>
          <div className='reach-card'>
            <div>
              <Image src={location} alt='location' width={50}/>
            </div>
            <h5>Location</h5>
            <p>Address</p>
          </div>
        </div>

        <div className='form-and-socials'>
          <div className='socials'>
            <h5>Register<span>Karo</span></h5>
            <div>
              <a href="#"><Image src={facebook} alt='facebook' width={16} height={16}/></a>
              <a href="#"><Image src={instagram} alt='instagram'  width={16} height={16}/></a>
              <a href="#"><Image src={linkedin} alt='linkedin'  width={16} height={16}/></a>
              <a href="#"><Image src={youtube} alt='youtube'  width={16} height={16}/></a>
              <a href="#"><Image src={twitter} alt='twitter'  width={16} height={16}/></a>
            </div>

          </div>
          <div className='form'>

          </div>
        </div>
      </div>

      <div className='copyright'>
        <p>Copyright © 2024 JustStart All Rights Reserved.</p>
      </div>
    </footer>
  )
}
