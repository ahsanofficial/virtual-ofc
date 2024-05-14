
import AllOneBusiness from "../components/landing-page-three/AllOneBusiness";
import Benefits from "../components/landing-page-three/Benefits";
import BuildDream from "../components/landing-page-three/BuildDream";
import FreeDownload from "../components/landing-page-three/FreeDownload"
import GrowYourBusiness from "../components/landing-page-three/GrowYourBusiness ";
import NextNProgress from "nextjs-progressbar";
import Faq from "../components/landing-page-three/Faq";
import Carousel from "../components/landing-page-three/Carousel";
import { Footer } from "../components/landing-page-three/LandingPageFooter";
import ClientTestimonials from "../components/landing-page-three/ClientTestimonials";


export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={50} />
        <Benefits/>
        <FreeDownload/>
        <AllOneBusiness/>
        <BuildDream/>
        <GrowYourBusiness/>
        <ClientTestimonials/>
        <Carousel clientTestmonailColor={'heading-color'}/>
        <Faq/>
        <Footer/>
      </>
    </div>
  );
}
