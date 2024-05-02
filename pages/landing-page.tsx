import NextNProgress from "nextjs-progressbar";
import Header from "../components/HomePage/Header";
import { Footer } from "../components/landing-page/footer/LandingPagefooter";
import Faq from "../components/landing-page/Faq";
import { Partners } from "../components/landing-page/Partners";
import { NewsletterSubscription } from "../components/landing-page/NewsletterSubscription";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
        {/* <Header /> */}
        
        <Partners/>
        <NewsletterSubscription />

        <Faq />
        <Footer></Footer>
      </>
    </div>
  );
}
