import Image from 'next/image'
import React from 'react'

type CardContent = {
    id:string,
    title:string,
    description:string,
    image: any,
    price?: string,
    button1:string,
    button2?:string,
    button1link:string,
    button2link?:string,
    points:{
        icon:any,
        text:string
    }[],

}


export const FlexibleWorkspaceCard = ({data}:{data: CardContent}) => {
  return (
    <div className="grid-item">
        <div>
            <Image className='cardimage' src={data.image} alt="Image 1" />
        </div>
        <h4 className='sub-heading'>{data.title}</h4>
        <p className='sub-heading'>{data.description}</p>
        {
            data.points.map((point, index) => (
                <p className='sub-heading' key={index}> 
                <Image className='calander-image' src={point.icon} alt="Image 1" /> {point.text}</p>
            ))
        }
        <p className='color-heading'>{data.price}</p>
        <button className='button-end'>{data.button1}</button> <button className='button-end-2nd'>{data.button2}</button>
    </div>
  )
}
