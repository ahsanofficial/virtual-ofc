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
    title: "Elevate Professionalism",
    details:
      "With a prestigious business address and professional phone answering services, our virtual office solutions instantly enhance your business image, making a lasting impression on clients and partners.",
  },

  {
    icon: focus,
    title: "Expand Reach",
    details:
      "Access new markets and opportunities effortlessly with virtual office locations in key cities and business districts, allowing you to establish a presence wherever your business needs to be.",
  },

  {
    icon: watch,
    title: "Enhance Flexibility",
    details:
      "Enjoy the freedom to work from anywhere while still maintaining a professional presence. Our virtual office solutions offer flexible plans tailored to your specific needs, enabling you to scale up or down as your business evolves.",
  },

  {
    icon: light,
    title: "Boost Productivity",
    details:
      "Streamline operations and optimize efficiency with our suite of virtual office tools and services. From virtual meeting rooms to mail handling, we provide everything you need to run your business smoothly, allowing you to focus on what matters most.",
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
          <h2>Readily Available. Economical. Adjustable</h2>
          <p>
          Experience a revolutionary shift in business operations with our cutting-edge virtual office solutions. Elevate your brand with prestigious addresses, seamless connectivity, and professional support. Expand your reach effortlessly, enhance flexibility, and boost productivity. Embrace the future of work and propel your business to new heights with our innovative virtual office services.
          </p>
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
      </div>
    </div>
  );
};

export default AccessibleAffordableAdaptable;
