import NextNProgress from "nextjs-progressbar";
import Faq from "../components/Faq";
import DetailsWhyOpt from "../components/why-opt-launchwise/DetailsWhyOpt";
import UseVirtualAddress from "../components/virtual-office-address-for/UseVirtualAddress";

import Head from "next/head";
import Header from "../components/HomePage/Header";
import Hero from "../components/HomePage/Hero";
import { Footer } from "../components/Footer/Footer";
import { DiscoverTheUltimate } from "../components/HomePage/DiscoverTheUltimate";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
        <Header />
        <Hero />
        <DiscoverTheUltimate />
        <UseVirtualAddress />
        <DetailsWhyOpt />
        <Faq />
        <Footer></Footer>
      </>
    </div>
  );
}
