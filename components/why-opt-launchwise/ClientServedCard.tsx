import Image from "next/image";
import React from "react";
import why_opt_launch from "../../assets/images/why_opt_launch.png"

const ClientServedCard = () => {
  return (
    <div id="ClientServedCard" >
       <div className="image-container">
            <Image
                alt="ClientServedCard"
                className="ClientServedCard-img"
                loading="lazy"
                src={why_opt_launch}
            />
        </div>
        <div className="client-container">
          <div>
            <h2 >10,000+</h2>
            <p >Clients Served</p>
          </div>
          <div>
            <h2 >200+</h2>
            <p>Locations Across India</p>
          </div>
          <div>
            <h2 >150+</h2>
            <p>Consultants</p>
          </div>
          <div>
            <h2 >500+</h2>
            <p>Partners</p>
          </div>
        </div>
    </div>
  );
};

export default ClientServedCard;


