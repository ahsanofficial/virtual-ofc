import NextNProgress from "nextjs-progressbar";
import GetYourVirtualOffice from "../components/landing-page-two/GetYourVirtualOffice";
import TrustedCompanies from "../components/landing-page-two/TrustedCompanies";
import AccessibleAffordableAdaptable from "../components/landing-page-two/AccessibleAffordableAdaptable";
import Faq from "../components/landing-page-two/Faq";
import Header from "../components/landing-page-two/Header";
import Hero from "../components/landing-page-two/Hero";

import Carousel from "../components/landing-page-two/client-testimonial/Carousel";
import { Footer } from "../components/landing-page-two/LandingPageFooter";


export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={50} />
        <Header />
        <Hero />
        <GetYourVirtualOffice />
        <AccessibleAffordableAdaptable/>
        <Carousel/>
        <TrustedCompanies/>
        <Faq/>
        <Footer/>
      </>
    </div>
  );
}
