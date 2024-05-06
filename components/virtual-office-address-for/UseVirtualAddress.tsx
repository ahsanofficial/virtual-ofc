import Image from "next/image";
import React from "react";
import centerlized_hub from "../../assets/icons/use-virtual-office-address-for/centerlized_hub.svg";
import company_registration from "../../assets/icons/use-virtual-office-address-for/company_registration.svg";
import effiecient_call from "../../assets/icons/use-virtual-office-address-for/effiecient_call.svg";
import flexible_meeting from "../../assets/icons/use-virtual-office-address-for/flexible_meeting.svg";
import gst_reg from "../../assets/icons/use-virtual-office-address-for/gst_reg.svg";
import virtual_office_main_img from "../../assets/images/virtual-office-address-for/virtual_office_main_img.svg";

const useVirtualAddressItems = [
  {
    title: "Company Registration",
    answer:
      " Enhance your professional image and organizational presence by choosing a virtual address over your residential one.",
    icons: company_registration,
  },
  {
    title: "Streamlined GST Registration",
    answer:
      "Simplify your GST registration process through the use of a virtual address, meeting government requirements efficiently and affordably.",
    icons: gst_reg,
  },
  {
    title: "Centralized Business Hub",
    answer:
      "Establish your virtual office as the hub of your business operations, utilizing it as your official business and mailing address, ensuring efficient mail handling without physical office space constraints.",
    icons: centerlized_hub,
  },
  {
    title: "Efficient Call Management",
    answer:
      "Ensure seamless communication with clients and stakeholders by routing all calls to your virtual address, where a virtual receptionist provides professional and prompt responses.",
    icons: effiecient_call,
  },
  {
    title: "Flexible Meeting Solutions",
    answer:
      "Impress investors and clients with access to fully-equipped meeting facilities, including boardrooms and conference rooms, available on-demand without the commitment of traditional office leases.",
    icons: flexible_meeting,
  },
];
const UseVirtualAddress = () => {
  return (
    <div id="UseVirtualAddress" className="virtual-office-address-for">
      <div className="outer-container">
       <div className="container">
        <h2 className="heading">Use Virtual Address For</h2>
        <div className="container-virtual-office">
          <div>
          {useVirtualAddressItems.map((item, index) => (
            <div className="list-virtual-addres" key={index}>
              <div>
                <Image src={item.icons} className="icons" alt={item.title}  loading="lazy" />
                
              </div>
              <div className="list-para">
                <h3 className="title">{item.title}</h3>
                <p className="details">{item.answer}</p>
              </div>
            </div>
          ))}
          </div>
        <div>
          <Image src={virtual_office_main_img} alt='Use Virtual Address For' className="virtual_office_main_img"  loading="lazy" />
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UseVirtualAddress;
