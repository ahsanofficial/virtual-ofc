import Image from "next/image";
import React from "react";
import star from '../../assets/images/private-limited-company-registration/star.svg'

interface ColorProps {
  clientName: string;
  review: string;
  image: string;
  stars: number;
}

const ClientComponent: React.FC<ColorProps> = ({  clientName, review,image,stars}) => {
  return (
    <div className="client-component">
      <div className="card">
        <div className="avatar">
          <Image src={image} alt="Avatar" width={100} height={100}/>
        </div>
        <div className="client">
          <div className="stars">
            {
              Array.from({ length: stars }, (_, index) => {
                return (
                  <Image
                  key={index}
                  src={star}
                  alt="star"
                  width={20}
                  height={20}
                  />
                );
              })
            }
          </div>
          <h5>{clientName}</h5>
        </div>
        <div className="review-text">
          <p>
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;
