
import React from 'react'
import Header from '../components/private-limited-company-registration/Header'
import Hero from '../components/private-limited-company-registration/Hero';

import AllOneBusiness from "../components/private-limited-company-registration/AllOneBusiness";
import Benefits from "../components/private-limited-company-registration/Benefits";
import BuildDream from "../components/private-limited-company-registration/BuildDream";
import FreeDownload from "../components/private-limited-company-registration/FreeDownload"
import GrowYourBusiness from "../components/private-limited-company-registration/GrowYourBusiness ";
import NextNProgress from "nextjs-progressbar";
import Faq from "../components/private-limited-company-registration/Faq";
import { Footer } from "../components/private-limited-company-registration/LandingPageFooter";
import ClientTestimonials from "../components/private-limited-company-registration/ClientTestimonials";
import WhatTime from '../components/private-limited-company-registration/WhatTime';



export default function Home() {
  return (
    <div>
      <>

        <NextNProgress color="#ffa229" height={50} />
        <Header />
        <Hero />
        <Benefits/>
        <FreeDownload/>
        <AllOneBusiness/>
        <BuildDream/>
        <WhatTime/>
        <GrowYourBusiness/>
        <ClientTestimonials/>
        <Faq/>
        <Footer/>

      </>
    </div>
  );
}
