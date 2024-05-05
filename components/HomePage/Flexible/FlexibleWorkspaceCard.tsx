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

type FlexibleWorkspaceCardProps = {
    data: CardContent;
    active:string;
    cardClick: (id:string) => void;
}


export const FlexibleWorkspaceCard = ({data,active,cardClick}:FlexibleWorkspaceCardProps) => {
    const {id,title,description,image,price,button1,button2,button1link,button2link,points} = data;

  return (
    <div className={`grid-item ${active === id ? "active": "inactive"}`} onClick={() => cardClick(id)}>
        <div className='image-container'>
            <Image className='cardimage' src={image} alt="card-image" />
        </div>
        <div className='grid-data'>
            <div className='grid-data-desc'>
                <h4>{title}</h4>
                <p className='desc'>{description}</p>
                {
                    points.map((point, index) => (
                        <div className='points' key={index}> 
                            <Image src={point.icon} alt="icon" width={20} height={20}/> 
                            <p>{point.text}</p>
                        </div>
                    ))
                }
            </div>


            <div className='grid-data-cta'>
                {
                    price && <p className='color-heading'>{price}</p>
                }
                <div className='buttons'>
                    <button className='primary'>
                        <a href={button1link}>{button1}</a>
                    </button>
                    {
                        button2 &&
                        <button className='secondary'>
                            <a href={button2link}>{button2}</a>
                        </button>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
