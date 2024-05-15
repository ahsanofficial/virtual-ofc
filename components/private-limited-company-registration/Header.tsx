import React from 'react'
import Image from 'next/image'
import logo from '../../assets/icons/private-limited-company-registration/Header/logo.svg'

const Header = () => {
  return (
    <header className='landing-three-header'>
        <div>
            <Image
                src={logo}
                alt="Register Karo Logo"
                objectFit="cover"
                objectPosition="center"
                className='logo-img'
                height={26}
                width={203}
            />
            <button>
                Get A Live Quote
            </button>
        </div>
    </header>
  )
}

export default Header
