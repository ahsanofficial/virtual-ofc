import NextNProgress from "nextjs-progressbar";
import { Header } from "../components/Header";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
        <Header/>
        <div className="home_faq_component">
         <Faq />
        </div>
        
      </>
    </div>
  );
}