import React from 'react'
import phone from '../../public/assets/icons/phone.svg'
import email from '../../public/assets/icons/email.svg'
import location from '../../public/assets/icons/location.svg'
import Image from 'next/image'

export const ConnectwithUs = () => {
  return (
    <>
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
    </>
  )
}
