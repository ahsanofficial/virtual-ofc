import React from 'react'
import Image from 'next/image'
import flash from '../../assets/icons/landing-page-three/flash.svg'
import businessFormed from '../../assets/images/landing-page-three/Hero/business.svg'
import industyYears from '../../assets/images/landing-page-three/Hero/industryYears.svg'
import transparent from '../../assets/images/landing-page-three/Hero/transparent.svg'
import google from '../../assets/icons/landing-page-three/google.svg'
import star from '../../assets/icons/landing-page-three/star.svg'

const Hero = () => {
  return (
    <section className='landing-three-hero'>
        <div className='hero-notice'>
            <Image 
                src={flash}
                alt="Flash"
                objectFit="cover"
                objectPosition="center"
                className='flash-icon'
                height={41}
                width={41}
            />
            <div className='text-data'>
                <div>FLASH Sale 20% Discount for New Clients , use code “QUICK20” at </div>
                <button>Checkout</button>
            </div>
            <Image 
                src={flash}
                alt="Flash"
                objectFit="cover"
                objectPosition="center"
                className='flash-icon'
                height={41}
                width={41}
            />
        </div>
        <div className='landing-hero-content'>
            <div className='hero-left'>
                <h1>Pvt Limited Company Registration</h1>
                <p>It's time for your business to register as a company by availing RegisterKaro’s company registration services</p>
                <div className='service-images'>
                    <div>
                        <Image src={businessFormed} className='img-size' alt="Business Formed" />
                    </div>
                    <div>
                        <Image src={industyYears} className='img-size' alt="Industy Years" />
                    </div>
                    <div className='span-image-center'>
                        <Image src={transparent} className='img-size' alt="Transparent" />
                    </div>
                </div>
                <div className='user-reviews'>
                    <div>
                        <Image src={google} width={64} height={64} className="googleImg" alt="Google" />
                        <Image src={star} alt="Star" className='review-star' />
                        <span>4.7/5 </span>
                    </div>
                    <p>15.7K+ Happy Reviews</p>
                </div>
            </div>
            <div className='hero-right'></div>
        </div>
    </section>
  )
}

export default Hero
