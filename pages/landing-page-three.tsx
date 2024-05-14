import React from 'react'
import Header from '../components/landing-page-three/Header'
import Hero from '../components/landing-page-three/Hero';
import AllOneBusiness from "../components/landing-page-three/AllOneBusiness";
import Benefits from "../components/landing-page-three/Benefits";
import BuildDream from "../components/landing-page-three/BuildDream";
import FreeDownload from "../components/landing-page-three/FreeDownload"
import GrowYourBusiness from "../components/landing-page-three/GrowYourBusiness ";


export default function Home() {
  return (
    <div>
      <>
      <Header />
      <Hero />
      <Benefits/>
      <FreeDownload/>
      <AllOneBusiness/>
      <BuildDream/>
      <GrowYourBusiness/>
      </>
    </div>
  );
}
