import React from 'react'

export const NewsletterSubscription = () => {
  return (
    <div className='newsletter-subscription'>
        <div className='title-text'>
            <h3>Subscribe For Latest</h3>
            <h3>Newsletter</h3>
        </div>
        <div className='email-form'>
            <div className='email-form-container'>
                <input type='email' placeholder='Enter your email' />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
