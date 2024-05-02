import NextNProgress from "nextjs-progressbar";
import GetYourVirtualOffice from "../components/landing-page-two/GetYourVirtualOffice";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={50} />
        <GetYourVirtualOffice />
      </>
    </div>
  );
}
