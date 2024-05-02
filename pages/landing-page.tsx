import NextNProgress from "nextjs-progressbar";
import Header from "../components/landing-page/Header";
import HeroBottom from "../components/landing-page/HeroBottom";
import { Footer } from "../components/Footer/Footer";
import Faq from "../components/landing-page/Faq";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
         <Header />
         <HeroBottom />
         <Faq />
        <Footer></Footer>
      </>
    </div>
  );
}
