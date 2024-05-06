import Image from "next/image";
import React from "react";
import HandShake from "../../assets/images/landing-page-two/HandShake.svg";
import Professional from "../../assets/icons/landing-page-two/accessible-affordable-adaptable/Professional.svg";
import scalablable from "../../assets/icons/landing-page-two/accessible-affordable-adaptable/scalablable.svg";
import Streamlined from "../../assets/icons/landing-page-two/accessible-affordable-adaptable/Streamlined.svg";
import Unmatched from "../../assets/icons/landing-page-two/accessible-affordable-adaptable/Unmatched.svg";

const listof_details = [
  {
    icon: Professional,
    title: "Professional Image & Enhanced Credibility",
    details:
      "Elevate your company's image and attract top talent with a professional virtual address for websites, business cards, and marketing materials.",
  },
  {
    icon: Streamlined,
    title: "Streamlined Business Operations",
    details:
      "Access essential services like virtual assistants, answering services, and teleconferencing – all under one roof.",
  },

  {
    icon: scalablable,
    title: "Scalable & Cost-Effective Solution",
    details:
      "Choose a virtual office plan that fits your needs and budget, with options for various locations and service levels.",
  },
  {
    icon: Unmatched,
    title: "Unmatched Work Flexibility",
    details:
      "Improve work-life balance by eliminating commutes and allowing flexible schedules.",
  },
];

const AccessibleAffordableAdaptable = () => {
  return (
    <div
      id="AccessibleAffordableAdaptable"
      className="page-two-accessible-affordable-adaptable"
    >
      <div className="container ">

          <h2>Accessible. Affordable. Adaptable</h2>
          <p>
            Whether you're an established enterprise or a scaling startup, your
            Virtual office should drive your business forward. Our virtual
            office solutions take your business places! 
          </p>
        <div className="content-section">
          <div className="accessible-right-part">
            <div className="details-grid">
              {listof_details.map((items, index) => (
                <div key={index}>
                  <Image src={items.icon} alt={items.details} />
                  <h5>{items.title}</h5>
                  <p>{items.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="image-cls">
            <Image src={HandShake} alt="GetYourVirtualOffice" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibleAffordableAdaptable;
