import React from 'react' 
import Image from 'next/image';

import oursolution from "../assets/oursolution/oursolution.svg"
import talktous from "../assets/oursolution/talktous.svg"
import bookworkspace from "../assets/oursolution/bookworkspace.svg"
import virtualoffice from "../assets/oursolution/virtualoffice.svg"
import buyamembership from "../assets/oursolution/buyamembership.svg"
import exploreourapp from "../assets/oursolution/exploreourapp.svg"
import arrow from "../assets/oursolution/arrow.svg"



const Oursolution = () => {
    return (

        <div className='icon-main'>

            <div className="icon-subcontainer">
                <div className="icon">

                    <Image
                        className='image'
                        src={oursolution}
                        alt="Our Solution Image"
                        width={92}
                        height={92}
                    />
                </div>
                <div className='icon-container'>
                    <div>
                        <div className="title-icon">Our solutions</div>
                        <div className='underline'></div>
                    </div>
                    <p className="description-icon"> Browse our full range of<br />products and services.</p>
                    <div className="button-icon">
                        <Image
                            src={arrow}
                            alt="Arrow"
                            width={31}
                           
                        />
                    </div>
                </div>  
            </div>

  
            <div className="icon-subcontainer">
                <div className="icon">
                    <Image
                        className='image'
                        src={talktous}
                        alt="Talk to Us"
                        width={92}
                        height={92}
                    />
                </div>
                <div className='icon-container'>
                    <div className="title-icon">Talk to us</div>
                    <div className='underline'></div>

                    <p className="description-icon"> Get advise from one of our<br />experts 24/7.</p>

                    <div className="button-icon">
                        <Image
                            src={arrow}
                            alt="Arrow"
                            width={31}
                        />
                    </div>
                </div>
            </div>
            <div className="icon-subcontainer">
                <div className="icon">
                    <Image
                        className='image'
                        src={bookworkspace}
                        alt="Book workspace"
                        width={92}
                        height={92}
                    />
                </div>
                <div className='icon-container'>
                    <div className="title-icon">Book workspace</div>
                    <div className='underline'></div>

                    <p className="description-icon">Book meeting rooms and <br />day offices now.</p>

                    <div className="button-icon">
                        <Image
                            src={arrow}
                            alt="Arrow"
                            width={31}
                        />
                    </div>
                </div>
            </div>

            <div className="icon-subcontainer">
                <div className="icon">
                    <Image
                        className='image'
                        src={virtualoffice}
                        alt="set up a virtual office"
                        width={92}
                        height={92}
                    />
                </div>
                <div className='icon-container'>
                    <div className="title-icon"> Set up a virtual office</div>
                    <div className='underline'></div>

                    <p className="description-icon"> Start building a real<br />presence today.</p>

                    <div className="button-icon">
                        <Image
                            src={arrow}
                            alt="Arrow"
                            width={31}
                        />
                    </div>
                </div>
            </div>






            <div className="icon-subcontainer">
                <div className="icon">
                    <Image
                        className='image'
                        src={buyamembership}
                        alt="Buy a membership"
                        width={92}
                        height={92}
                    />
                </div>
                <div className='icon-container'>
                    <div className="title-icon"> Buy a membership</div>
                    <div className='underline'></div>

                    <p className="description-icon"> Start building a real<br />presence today.</p>

                    <div className="button-icon">
                        <Image
                            src={arrow}
                            alt="Arrow"
                            width={31}
                        />

                    </div>
                </div>
            </div>
            <div className="icon-subcontainer">
                <div className="icon">
                    <Image
                        className='image'
                        src={exploreourapp}
                        alt="Explore our app"
                        width={92}
                        height={92}
                    />
                </div>
                <div className='icon-container'>
                    <div className="title-icon"> Explore our app</div>
                    <div className='underline'></div>

                    <p className="description-icon"> Start building a real<br />presence today.</p>

                    <div className="button-icon"><Image
                        src={arrow}
                        alt="Arrow"
                        width={31}
                    />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Oursolution