import React, { useState } from 'react'
import Image from 'next/image';
import firstbox from '../assets/flexible-workspace/firstbox.svg'
import secondbox from '../assets/flexible-workspace/secondbox.svg'
import thirdbox from '../assets/flexible-workspace/thirdbox.svg'
import forthbox from '../assets/flexible-workspace/fourthbox.svg'
import fifthbox from '../assets/flexible-workspace/fifthbox.svg'
import calenderone from '../assets/flexible-workspace/calenderone.svg'
import person from '../assets/flexible-workspace/person.svg'
import disc from '../assets/flexible-workspace/disc.svg'
import clock from '../assets/flexible-workspace/clock.svg'
import india from '../assets/flexible-workspace/india.svg'
import search from '../assets/flexible-workspace/search.svg'
import { FlexibleWorkspaceCard } from './HomePage/Flexible/FlexibleWorkspaceCard';

// Buttons content
const buttonsTopConent = [
    {
        id: "button1",
        text: "Office space"
    },
    {
        id: "button2",
        text: "Coworking"
    },
    {
        id: "button3",
        text: "Virtual offices"
    },
    {
        id: "button4",
        text: "Meeting rooms"
    }
]

// cards content
const cardsContent = [
    {
        id: "card1",
        title: "Private offices",
        description: "A range of ready-to-use, fully equipped offices with everything you need to get started.",
        image: firstbox,
        price: "From $ 89 per person per month",
        button1:"Get a quote",
        button2:"Learn more",
        button1link:"#",
        button2link:"#",
        points:[
            {
                icon: calenderone,
                text:"By month or year",
            },
            {
                icon: person,
                text:"Teams of any size",
            }
        ],
    },
    {
        id: "card2",
        title: "Custom Offices",
        description: "When off-the-shelf simply isn't enough. Customise all aspects of your space, including furniture and branding.",
        image: secondbox,
        price: "From $ 89 per person per month",
        button1:"Get a quote",
        button2:"Learn more",
        button1link:"#",
        button2link:"#",
        points:[
            {
                icon: disc,
                text:"By month or year + customised",
            },
            {
                icon: person,
                text:"Teams of any size",
            }
        ],
    },
    {
        id: "card3",
        title: "Day Offices",
        description: "A professional on-demand office space. Perfect when you need to get your head down and do your best work.",
        image: thirdbox,
        price: "From $ 25 per day",
        button1:"Book now",
        button2:"Learn more",
        button1link:"#",
        button2link:"#",
        points:[
            {
                icon: clock,
                text:"By the hour or day",
            },
            {
                icon: person,
                text:"Teams of any size",
            }
        ],
    },
    {
        id: "card4",
        title: "Office membership",
        description: "Flexible access to Day Offices where and when you choose, at thousands of locations worldwide.",
        image: forthbox,
        price: "From $ 225 per month",
        button1:"Buy now",
        button2:"Learn more",
        button1link:"#",
        button2link:"#",
        points:[
            {
                icon: calenderone,
                text:"5, 10 or unlimited days per month",
            }
        ],
    },
    {
        id: "card5",
        title: "Need a helping hand?",
        description: "Arrange a 1:1 call with a professional advisor.",
        image: fifthbox,
        button1:"Talk to an expert",
        button1link:"#",
        points:[
            {
                icon: person,
                text:"Agents available worldwide",
            },
            {
                icon: person,
                text:"Discuss different options",
            },
            {
                icon: person,
                text:"Receive a personalised quote",
            },
            {
                icon: person,
                text:"Sign up and get started",
            }
        ],
    }
]

const Flexible = () => {

    const [activeBtn, setActiveBtn] = useState<string>('button1');

    const changeActiveBtn = (id: string) => {
        setActiveBtn(id);
    }

    return (
        <div className='flexible-workspace'>
            
            <div className='container'>

                {/* Heading */}
                <div className='top-header'>
                    <h3>Flexible workspace designed around your needs</h3>
                    <div className='side-heading'>
                        <div className='india'> 
                            <Image src={india} alt="indiaflag" width={24} height={24}/> 
                            <p>Prices for India</p>
                        </div>
                        <div className='search'>
                            <Image src={search} alt="searchicon" width={20} height={20}/>
                            <input type="text" placeholder='Search for a city or area to refine pricing' />
                        </div>
                    </div>
                </div>
                {/* Buttons */}
                <div className="buttons-top">
                    {
                        buttonsTopConent.map((buttonContent) => (
                            <button 
                                type='button' 
                                key={buttonContent.id} 
                                className={`button-top ${activeBtn === buttonContent.id && 'active'}`}
                                onClick={() => changeActiveBtn(buttonContent.id)}
                            >
                                {buttonContent.text}
                            </button>
                        ))
                    }
                </div>

                <p className='section-desc'>Our flexible, fully-customisable office rentals are available by the hour, day, or as long as you need.</p>

                {/* Divs with Image and Text */}
                <div className="gridslider-container">
                    {/* Div 1 */}
                    <div className='grid-slider'>

                        {
                            cardsContent.map((cardContent) => (
                                <FlexibleWorkspaceCard key={cardContent.id} data={cardContent} />
                            ))
                        }



                        


                        {/* <div className="grid-item">
                            <Image className='images' src={firstbox} alt="Image 1" />
                            <p className='sub-heading'>Private offices</p>
                            <p className='sub-heading'>A range of ready-to-use, fully equipped
                                offices with everything you need to get
                                started.</p><br></br>
                            <p className='sub-heading'>  <Image className='calander-image' src={calenderone} alt="Image 1" /> By month or year</p>
                            <p className='sub-heading'>  <Image src={person} alt="Image 1" /> Teams of any size</p><br />
                            <p className='color-heading'>From $ 89 per person per month</p>
                            <button className='button-end'>Get a quote</button> <button className='button-end-2nd'>Learn more</button>
                        </div> */}

                        {/* Div 2 */}
                        {/* <div className="grid-item">
                            <Image className='images' src={secondbox} alt="Image 2" />
                            <p className='sub-heading'>Custom Offices</p>
                            <p className='sub-heading'>When off-the-shelf simply isn't
                                enough. Customise all aspects of your
                                space, including furniture and branding.</p>
                            <p className='sub-heading'>  <Image src={disc} alt="Image 1" /> By month or year + customised</p>
                            <p className='sub-heading'> <Image src={person} alt="Image 1" /> Teams of any size</p><br />
                            <p className='color-heading'>From $ 89 per person per month</p>
                            <button className='button-end'>Get a quote</button> <button className='button-end-2nd'>Learn more</button>
                        </div> */}

                        {/* Div 3 */}
                        {/* <div className="grid-item">
                            <Image className='images' src={thirdbox} alt="Image 3" />
                            <p className='sub-heading'>Day Offices</p>
                            <p className='sub-heading'>
                                A professional on-demand office
                                space. Perfect when you need to get
                                your head down and do your best work.
                            </p>
                            <p className='sub-heading'>  <Image src={clock} alt="Image 1" /> By the hour or day</p>
                            <p className='sub-heading'>  <Image src={person} alt="Image 1" /> Teams of any size</p><br />
                            <p className='color-heading'>From $ 25 per day</p>
                            <button className='button-end' id="button-buy-now">Buy Now</button > <button className='button-end-2nd'>Learn more</button>
                        </div> */}

                        {/* Div 4 */}
                        {/* <div className="grid-item">
                            <Image className='images' src={forthbox} alt="Image 4" />
                            <p className='sub-heading'>Office membership</p>
                            <p className='sub-heading'>Flexible access to Day Offices where
                                and when you choose, at thousands of
                                locations worldwide.</p> <br />
                            <p className='sub-heading'>  <Image src={calenderone} alt="Image 1" /> 5, 10 or unlimited days per month</p><br /><br />
                            <p className='color-heading'>From $ 225 per month</p>
                            <button className='button-end ' id='button-end-2ndlast'>Buy Now</button> <button className='button-end-2nd'>Learn more</button>

                        </div> */}

                        {/* Div 5 */}
                        {/* <div className="grid-item" id="gird-item-last">
                            <Image className='images' src={fifthbox} alt="Image 5" />
                            <p className='sub-heading'>Need a helping hand?</p>
                            <p className='sub-heading'>Arrange a 1:1 call with a professional advisor.</p><br />
                            <p className='sub-heading' > <Image src={whiteperson} alt="Image 1" /><span className='text-tags'>Agents available worldwide</span> </p>
                            <p className='sub-heading'> <Image src={whiteperson} alt="Image 1" /> Discuss different options</p>
                            <p className='sub-heading'> <Image src={whiteperson} alt="Image 1" /> Receive a personalised quote</p>
                            <p className='sub-heading'> <Image src={whiteperson} alt="Image 1" /> Sign up and get started</p>
                            <button className='button-end-last'>Talk to an expert</button>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Flexible