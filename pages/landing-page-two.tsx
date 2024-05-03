import NextNProgress from "nextjs-progressbar";
import GetYourVirtualOffice from "../components/landing-page-two/GetYourVirtualOffice";
import TrustedCompanies from "../components/landing-page-two/TrustedCompanies";
import AccessibleAffordableAdaptable from "../components/landing-page-two/AccessibleAffordableAdaptable";
import Carousel from "../components/landing-page-two/client-testimonial/Carousel";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={50} />
        <GetYourVirtualOffice />
        <AccessibleAffordableAdaptable/>
        <Carousel/>
        <TrustedCompanies/>
      </>
    </div>
  );
}
