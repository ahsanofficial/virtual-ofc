import NextNProgress from "nextjs-progressbar";
import Faq from "../components/Faq";
import DetailsWhyOpt from "../components/why-opt-launchwise/DetailsWhyOpt";
import UseVirtualAddress from "../components/virtual-office-address-for/UseVirtualAddress";
import Header from "../components/HomePage/Header";
import Hero from "../components/HomePage/Hero";
import { Footer } from "../components/Footer/Footer";
import { DiscoverTheUltimate } from "../components/HomePage/DiscoverTheUltimate"; 
import Companies from "../components/trusted-by-largest-companies/Companies";
import Oursolution from "../components/Oursolution";
import Flexible from "../components/Flexible";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
        <Header />
        <Hero />
        <Oursolution/> 
        <Flexible/>
        <DiscoverTheUltimate />
        <UseVirtualAddress />
        <Companies/>
        <DetailsWhyOpt />
        <Faq />
        <Footer></Footer>
      </>
    </div>
  );
}
