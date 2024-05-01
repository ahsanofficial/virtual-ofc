import Link from 'next/link'
import React from 'react'

const datapoints = [
    {
        id:"data-point-1",
        title:"Prestigious Business Addresses",
        description:"Access to prestigious business addresses in key locations, enhancing your brand image and credibility."
    },
    {
        id:"data-point-2",
        title:"Nationwide Presence",
        description:"Establish a presence in multiple cities across India without the need for physical office space."
    },
    {
        id:"data-point-3",
        title:"Mail Handling Services",
        description:"Efficient management of mail and packages, including forwarding, scanning, and storage, ensuring seamless communication."
    },
    {
        id:"data-point-4",
        title:"Professional Call Answering",
        description:"Professional receptionists manage incoming calls with personalized greetings, providing a professional image for your business."
    },
    {
        id:"data-point-5",
        title:"Flexibility and Cost-Effectiveness",
        description:"Enjoy the flexibility of virtual office solutions with customizable plans, avoiding the high costs associated with traditional office leases."
    },
    {
        id:"data-point-6",
        title:"Meeting Room Facilities",
        description:"Access to meeting rooms and conference facilities in various cities, allowing for seamless collaboration and client meetings."
    },
    {
        id:"data-point-7",
        title:"Business Expansion",
        description:"Expand your business footprint across India without the overhead costs of physical office space, enabling growth and scalability."
    },
]

export const TextSection = () => {
  return (
    <div className='text-section'>
        <div className='heading'>
            <h2>Discover the Ultimate Workspace Solution.</h2>
            <p>From solo entrepreneurs to growing teams, find everything you need under one roof. Whether it's pay-per-use plans or fixed desks, our flexible options cater to your unique work style, ensuring seamless productivity and success.</p>
        </div>
        <div>
            <ul className='data-points'>
                {datapoints.map((datapoint) => (
                    <div key={datapoint.id}>
                        <li>{datapoint.title}</li>
                        <p>{datapoint.description}</p>
                    </div>
                ))}
            </ul>
        </div>
        <div className='call-to-action'>
            <Link href={'#'}>Talk to an expert 	&#62;</Link>
        </div>

    </div>
  )
}
