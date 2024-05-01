import Image from 'next/image'
import React from 'react'

import image1 from '../../../public/assets/images/discover-the-ultimate-1.png'
import image2 from '../../../public/assets/images/discover-the-ultimate-2.png'

export const ImageSection = () => {
  return (
    <div className='image-section'>

        <div className='image-section-container'>
            <div className='image-container'>
                <Image src={image1} width={300} alt='' className='top-right'/>
                <Image src={image2} width={380} alt='' className='bottom-left'/>
            </div>
        </div>

        
    </div>
  )
}
