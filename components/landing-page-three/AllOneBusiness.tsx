import Image from "next/image";
import CompanyInco from "../../assets/icons/landing-page-three/AllOneBusiness/company_inco.svg";
import DinDsc from "../../assets/icons/landing-page-three/AllOneBusiness/din_dsc.svg";
import DraftingMoa from "../../assets/icons/landing-page-three/AllOneBusiness/drafting_moa.svg";
import PanTan from "../../assets/icons/landing-page-three/AllOneBusiness/pan_tan.svg";
import Registration from "../../assets/icons/landing-page-three/AllOneBusiness/registration.svg";
import ZohoBooks from "../../assets/icons/landing-page-three/AllOneBusiness/zoho_books.svg";

const list_items = [
  {
    details: "Company Incorporation Certificate",
    icon: CompanyInco,
  },
  {
    details: "Drafting of MoA & AoA",
    icon: DraftingMoa,
  },
  {
    details: "Zoho Books Subscription",
    icon: ZohoBooks,
  },
  {
    details: "DIN and DSC for 2 Directors",
    icon: DinDsc,
  },
  {
    details: "Company PAN and TAN",
    icon: PanTan,
  },
  {
    details: "Registration Fees and Stamp Duty",
    icon: Registration,
  },
];

const AllOneBusiness = () => {
  return (
    <div className="p-three-all-one-business-container">
      <div className="container">
        <div className="heading">
          <h2>The All-in One business compliance solution </h2>
          <p>Introducing the total compliance package</p>
          <div className="line"></div>
        </div>
        <div className="cards">
          {list_items.map((item, index) => (
            <div className={`item ${index === (list_items.length-1)?'last':''}`}  key={index}>
              <div className="item-content">
                <p>{item.details}</p>
                <Image src={item.icon} alt={item.details} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllOneBusiness;
