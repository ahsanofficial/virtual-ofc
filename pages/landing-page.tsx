import NextNProgress from "nextjs-progressbar";
import Header from "../components/landing-page/Header";
import { Footer } from "../components/Footer/Footer";
import Faq from "../components/landing-page/Faq";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
         <Header />
         <Faq />
        <Footer></Footer>
      </>
    </div>
  );
}
