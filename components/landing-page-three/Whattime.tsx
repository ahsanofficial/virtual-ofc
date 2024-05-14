import React from 'react';
import Image from 'next/image';
import whattime from "../../assets/images/landing-page-three/whattime/whattime.svg";
import responsive from "../../assets/images/landing-page-three/whattime/responsive.svg";
const Whattime = () => {
  return (
    <div className='main-container-big'>
        <div className='main-container'>
            <div className='underline'>
        <h1 className='main-heading'>What is the time required for<br/></h1>
        <h1 className='main-heading-2nd-part'>Registering a Company ?</h1>
             </div>
        </div>
        <div className='second-main-container'>
        <p className='second-text'>
          On an average it takes around <span className='color-span'>7-10 working days </span> to register a private limited company in india  subject to document verification by MCA .
          </p>
          </div>
          <div className='main-image'>
          <Image className='image-one'
          src= {whattime}
          alt="Example Image"
          />
          </div>
          <div className='main-image-second'>
          <Image className='image-second'
          src= {responsive}
          alt="Example Image"
          />
          </div>
    </div>
    

  )
}

export default Whattime ;