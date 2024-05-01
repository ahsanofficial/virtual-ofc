import NextNProgress from "nextjs-progressbar";
import { Header } from "../components/Header";
import Icons from "../components/Icons";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
        <Header/>
        <Icons/>
      
      </>
    </div>
  );
}