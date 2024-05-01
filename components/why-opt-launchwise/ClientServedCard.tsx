import Image from "next/image";
import React from "react";
import why_opt_launch from "../../assets/images/why_opt_launch.png"

const ClientServedCard = () => {
  return (
    <div id="ClientServedCard" className="ClientServedCard">
      <div className="w-80">
      <div className="why_opt_img">
        <Image
            alt=""
            className=""
            loading="lazy"
            height={264}
            src={why_opt_launch}
          />
        </div>
        <div className="client-container">
          <div>
            <h2 className="client-numbers">10,000+</h2>
            <p  className="client-para-clients">Clients Served</p>
          </div>
          <div>
            <h2 className="client-numbers">200+</h2>
            <p className="client-para-clients">Locations Across India</p>
            </div>
            <div>
            <h2 className="client-numbers">150+</h2>
            <p className="client-para-clients">Consultants</p>
            </div>
            <div>
            <h2 className="client-numbers">500+</h2>
            <p className="client-para-clients">Partners</p>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default ClientServedCard;


