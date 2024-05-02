import NextNProgress from "nextjs-progressbar";
import GetYourVirtualOffice from "../components/landing-page-two/GetYourVirtualOffice";
import TrustedCompanies from "../components/landing-page-two/TrustedCompanies";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={50} />
        <GetYourVirtualOffice />
        <TrustedCompanies/>
      </>
    </div>
  );
}
