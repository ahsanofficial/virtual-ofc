import React from 'react'
import hooli from '../../assets/images/landing-page/partners/hooli.svg'
import lyft from '../../assets/images/landing-page/partners/lyft.svg'
import piedpiper from '../../assets/images/landing-page/partners/piedpiper.svg'
import stripe from '../../assets/images/landing-page/partners/stripe.svg'
import aws from '../../assets/images/landing-page/partners/aws.svg'
import reddit from '../../assets/images/landing-page/partners/reddit.svg'
import Image from 'next/image'

export const Partners = () => {
  return (
    <div className='landingpage1_partners'>
      <div>
        <Image src={hooli} alt='hooli' />
      </div>
      <div>
        <Image src={lyft} alt='lyft' />
      </div>
      <div>
        <Image src={piedpiper} alt='piedpiper' />
      </div>
      <div>
        <Image src={stripe} alt='stripe' />
      </div>
      <div>
        <Image src={aws} alt='aws' />
      </div>
      <div>
        <Image src={reddit} alt='reddit' />
      </div>
    </div>
  )
}

