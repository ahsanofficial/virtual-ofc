import NextNProgress from "nextjs-progressbar";
import Faq from "../components/landing-page-three/Faq";
import Carousel from "../components/landing-page-two/client-testimonial/Carousel";
import { Footer } from "../components/landing-page-three/LandingPageFooter";
import ClientTestimonials from "../components/landing-page-three/ClientTestimonials";


export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={50} />
        <ClientTestimonials/>
        <Carousel clientTestmonailColor={'heading-color'}/>
        <Faq/>
        <Footer/>
      </>
    </div>
  );
}