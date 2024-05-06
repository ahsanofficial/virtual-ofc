import Image from "next/image";
import React from "react";
import dabur_logo from '../../../assets/icons/landing-page-two/carousel/dabur_log.svg'

interface ColorProps {
  clientTestmonailColor?: string;
  clientName: string;
  review: string;
}

const ClientComponent: React.FC<ColorProps> = ({ clientTestmonailColor, clientName, review}) => {
  return (
    <div>
      <h2>Client <span className={`${clientTestmonailColor}`} heading-color>Testimonial</span> </h2>
      <div className="details-container">
        <Image src={dabur_logo} alt="Dabur Log" loading="lazy" />
        <div className="para">
            <p>{review}</p>
             <div className="writer"><div className="line"></div><h5>{clientName}</h5></div>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;
