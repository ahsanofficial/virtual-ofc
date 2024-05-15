import React from 'react'
import speaker from '../../assets/images/private-limited-company-registration/reviews-speaker.png'
import clientImage from '../../assets/images/private-limited-company-registration/clientImage.png'
import Image from 'next/image'

function ClientTestimonials() {
  return (
    <div className='client-testimonials'>
        <div className='container'>        
            <div className='heading'>
                <h3>Client Testimonials</h3>
                <div/>
            </div>
            <div className='content'>
                <div className=''>
                    <Image src={speaker} alt='reviews' height={250}/>
                    <p>Lets <span>hear what our clients</span> want to say</p>
                    <div />
                </div>
                <div className=''>
                    <Image src={clientImage} alt='client'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientTestimonials