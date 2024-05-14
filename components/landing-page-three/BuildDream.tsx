import Image from "next/image";
import FillUp from "../../assets/icons/landing-page-three/BuildDream/fill_up.svg";
import GetYourCompany from "../../assets/icons/landing-page-three/BuildDream/get_your_company.svg";
import PayOnly from "../../assets/icons/landing-page-three/BuildDream/pay_only.svg";
import SubmitDoc from "../../assets/icons/landing-page-three/BuildDream/submit_doc.svg";


const list_items = [
  {
    details: "FILL UP THE FORMS",
    icon: FillUp,
  },
  {
    details: "SUBMIT THE DOCUMENTS",
    icon: SubmitDoc,
  },
  {
    details: "PAY ONLY PROFESSIONAL FEES",
    icon: PayOnly,
  },
  {
    details: "GET YOUR COMPANY REGISTERED",
    icon: GetYourCompany,
  }
];

const BuildDream = () => {
  return (
    <div className="p-three-build-dream-container">
      <div className="container">
        <div className="heading">
          <h2>Build your Dream Company in <span>4 Easy Steps</span> </h2>
          <div className="line"></div>
        </div>
        <div className="cards">
          {list_items.map((item, index) => (
            <div className={`item ${index === (list_items.length-1)?'last':''}`} key={index}>
                <Image src={item.icon} alt={item.details} />
                <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildDream;
