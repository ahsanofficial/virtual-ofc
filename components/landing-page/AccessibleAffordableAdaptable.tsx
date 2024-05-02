import Image from "next/image";
import React from "react";
import build_image from "../../assets/images/landing-page/accessible-affordable-adaptable/building.svg";
import focus from "../../assets/icons/landing-page/accessible-affordable-adaptable/focus.svg";
import light from "../../assets/icons/landing-page/accessible-affordable-adaptable/light.svg";
import ok_tick from "../../assets/icons/landing-page/accessible-affordable-adaptable/ok_tick.svg";
import watch from "../../assets/icons/landing-page/accessible-affordable-adaptable/watch.svg";

const listof_details = [
  {
    icon: ok_tick,
    title: "Professional Image & Enhanced Credibility",
    details:
      "Elevate your company's image and attract top talent with a professional virtual address for websites, business cards, and marketing materials.",
  },

  {
    icon: focus,
    title: "Unmatched Work Flexibility",
    details:
      "Improve work-life balance by eliminating commutes and allowing flexible schedules.",
  },

  {
    icon: watch,
    title: "Streamlined Business Operations",
    details:
      "Access essential services like virtual assistants, answering services, and teleconferencing – all under one roof.",
  },

  {
    icon: light,
    title: "Scalable & Cost-Effective Solution",
    details:
      "Choose a virtual office plan that fits your needs and budget, with options for various locations and service levels.",
  },
];

const AccessibleAffordableAdaptable = () => {
  return (
    <div
      id="AccessibleAffordableAdaptable"
      className="accessible-affordable-adaptable"
    >
      <div className="container ">
        <div className="image-cls">
          <Image src={build_image} alt="GetYourVirtualOffice" loading="lazy" />
        </div>
        <div className="accessible-right-part">
          <h2>Accessible. Affordable. Adaptable</h2>
          <p>
            Whether you're an established enterprise or a scaling startup, your
            Virtual office should drive your business forward. Our virtual
            office solutions take your business places! (Accessible. Affordable.
            Adaptable)
          </p>
          <div className="details-grid">
            {listof_details.map((items, index) => (
              <div>
                <Image src={items.icon} alt={items.details} />
                <h5>{items.title}</h5>
                <p>{items.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibleAffordableAdaptable;
