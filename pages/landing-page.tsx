import NextNProgress from "nextjs-progressbar";
import Header from "../components/HomePage/Header";
import { Footer } from "../components/Footer/Footer";
import Faq from "../components/landing-page/Faq";
import GetYourVirtualOffice from "../components/landing-page/GetYourVirtualOffice";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
         {/* <Header /> */}
         <GetYourVirtualOffice/>
         <Faq />
        <Footer></Footer>
      </>
    </div>
  );
}
