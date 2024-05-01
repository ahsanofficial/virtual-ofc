import NextNProgress from "nextjs-progressbar";
import { Header } from "../components/Header";
import Faq from "../components/Faq";
import DetailsWhyOpt from "../components/why-opt-launchwise/DetailsWhyOpt";
import UseVirtualAddress from "../components/virtual-office-address-for/UseVirtualAddress";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
        <Header/>
        <div className="virtual-office-address-for">
          <UseVirtualAddress/>
        </div>
        <div className="why-opt-launchwise">
          <DetailsWhyOpt/>
        </div>
        <div className="home_faq_component">
         <Faq />
        </div>
        
        
      </>
    </div>
  );
}