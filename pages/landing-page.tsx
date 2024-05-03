import NextNProgress from "nextjs-progressbar";
import Header from "../components/landing-page/Header";
import HeroBottom from "../components/landing-page/HeroBottom";
import Faq from "../components/landing-page/Faq";
import GetYourVirtualOffice from "../components/landing-page/GetYourVirtualOffice";
import AccessibleAffordableAdaptable from "../components/landing-page/AccessibleAffordableAdaptable";
import { Footer } from "../components/landing-page/footer/LandingPagefooter";
import { Partners } from "../components/landing-page/Partners";
import { NewsletterSubscription } from "../components/landing-page/NewsletterSubscription";
import FreeDownload from "../components/landing-page/FreeDownload";
import Carousel from "../components/landing-page-two/client-testimonial/Carousel";


export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
         <Header />
         <HeroBottom />
         <FreeDownload/>
         <GetYourVirtualOffice/>
         <AccessibleAffordableAdaptable/>
        <Partners/>
        <NewsletterSubscription />
        <Carousel/>
        <Faq />
        <Footer></Footer>
      </>
    </div>
  );
}
