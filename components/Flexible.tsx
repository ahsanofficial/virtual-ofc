import React, { useState } from 'react'
import Image from 'next/image';
import firstbox from '../assets/flexible-workspace/firstbox.svg'
import secondbox from '../assets/flexible-workspace/secondbox.svg'
import thirdbox from '../assets/flexible-workspace/thirdbox.svg'
import forthbox from '../assets/flexible-workspace/fourthbox.svg'
import fifthbox from '../assets/flexible-workspace/fifthbox.svg'
import calenderone from '../assets/flexible-workspace/calenderone.svg'
import person from '../assets/flexible-workspace/person.svg'
import  disc from '../assets/flexible-workspace/disc.svg'
import  clock from '../assets/flexible-workspace/clock.svg'
import  india from '../assets/flexible-workspace/india.svg'
import  search from '../assets/flexible-workspace/search.svg'
import  whiteperson from '../assets/flexible-workspace/whiteperson.svg'


const Flexible = () => {

    return (
        <div className='top-main-container'>
            
                {/* Heading */}
                <div className='top-header'>
                <h2 className='top-heading' id='top-heading'>Flexible workspace designed around your needs</h2>
                <div className='side-heading'><div> <Image  className='imagelogo' src={india} alt="Image 1" /> Prices for India</div>   
                <div> <Image src={search} alt="Image 1" /> <a href="">Search for a city or area to refine pricing </a>
                </div>
                </div>
               
                </div>
                <div className='price-heading'>
                <div className='side-heading-two'><div> <Image src={india} alt="Image 1" /> Prices for India</div>   
                <div className='flexing-div'> <Image   className='imagelogo' src={search} alt="Image 1" /> <a href="">Search for a city or area to refine pricing </a>
                </div>
                </div>
                </div>







                {/* Buttons */}

                <div className="buttons">
                    <button id="button-top-first" className='button-top' >Office space</button>
                    <button className='button-top'>Coworking</button>
                    <button className='button-top'>Virtual offices</button>
                    <button className='button-top'>Meeting rooms</button>
                </div>
                {/* Divs with Image and Text */}
                <div className="grid-container">
                <p className='our-flexible'>Our flexible, fully-customisable office rentals are available by the hour, day, or as long as you need.</p>{/* Div 1 */}
                    <div className='grid-slider'>
                    <div className="grid-item">
                        <Image className='images' src={firstbox} alt="Image 1" />
                        <p className='sub-heading' >Private offices</p>
                        <p className='sub-heading' >A range of ready-to-use, fully equipped
                            offices with everything you need to get
                            started.</p><br/>
                        <div className='adjustment-first'><p className='sub-heading'>  <Image className='calander-image' src={calenderone} alt="Image 1" /> By month or year</p>
                        <p className='sub-heading' id='sub-heading-2nd'>  <Image src={person} alt="Image 1" /> Teams of any size</p><br/></div>
                        <p className='color-heading'  id="adjustment-color">From $ 89 per person per month</p>
                        <button className='button-end' id="button-first-two">Get a quote</button> <button className='button-end-2nd'>Learn more</button>
                    </div>

                    {/* Div 2 */}
                    <div className="grid-item">
                        <Image  className='images'src={secondbox} alt="Image 2" />
                        <p className='sub-heading'>Custom Offices</p>
                        <p className='sub-heading'>When off-the-shelf simply isn't
                            enough. Customise all aspects of your
                            space, including furniture and branding.</p>
                        <p className='sub-heading'>  <Image src={disc} alt="Image 1"  /> By month or year + customised</p>
                        <p className='sub-heading' > <Image src={person} alt="Image 1" /> Teams of any size</p><br/>
                        <p className='color-heading' id="color-2nd-heading">From $ 89 per person per month</p>
                        <button className='button-end' id="button-two" >Get a quote</button> <button  className='button-end-2nd'>Learn more</button>
                    </div>

                    {/* Div 3 */}
                    <div className="grid-item">
                        <Image className='images' src={thirdbox} alt="Image 3" />
                        <p className='sub-heading'>Day Offices</p>
                        <p className='sub-heading'>
                            A professional on-demand office
                            space. Perfect when you need to get
                            your head down and do your best work.
                        </p>
                        <p className='sub-heading'>  <Image src={clock} alt="Image 1" /> By the hour or day</p>
                        <p className='sub-heading'>  <Image src={person} alt="Image 1" /> Teams of any size</p><br/>
                        <p className='color-heading' id='color-heading-three'>From $ 25 per day</p>
                        <button  className='button-end button-three' id="button-buy-now button-end-2ndlast">Buy Now</button > <button  className='button-end-2nd'>Learn more</button>
                    </div>

                    {/* Div 4 */}
                    <div className="grid-item">
                        <Image  className='images'src={forthbox} alt="Image 4" />
                        <p className='sub-heading'>Office membership</p>
                        <p className='sub-heading'>Flexible access to Day Offices where
                            and when you choose, at thousands of
                            locations worldwide.</p> <br/>
                        <p className='sub-heading'>  <Image src={calenderone} alt="Image 1" /> 5, 10 or unlimited days per month</p><br/><br/>
                        <p className='color-heading'>From $ 225 per month</p>
                        <button   className='button-end 'id='button-end-2ndlast'>Buy Now</button> <button  className='button-end-2nd'>Learn more</button>

                    </div>

                    {/* Div 5 */}
                    <div className="grid-item" id="gird-item-last">
                        <Image className='images' src={fifthbox} alt="Image 5" />
                        <p className='sub-heading'>Need a helping hand?</p>
                        <p className='sub-heading'>Arrange a 1:1 call with a professional advisor.</p><br/>
                        <p className='sub-heading' > <Image src={whiteperson} alt="Image 1"/><span className='text-tags'>Agents available worldwide</span> </p>
                        <p className='sub-heading'> <Image src={whiteperson} alt="Image 1" /> Discuss different options</p>
                        <p className='sub-heading'> <Image src={whiteperson} alt="Image 1" /> Receive a personalised quote</p>
                        <p className='sub-heading'> <Image src={whiteperson} alt="Image 1" /> Sign up and get started</p>
                        <button className='button-end-last'>Talk to an expert</button>
                    </div>
                </div>
                </div>
                </div>
            
        
    )
}

export default Flexible