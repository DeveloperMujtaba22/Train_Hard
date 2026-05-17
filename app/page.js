import Image from "next/image";
import Hero from "./_components/Hero";
import ForTheCommitted from "./_components/Forthecommitted";
import Features from "./_components/Features";
import Jointhecommunity from "./_components/Jointhecommunity";

export default function Home() {
  return (
   <div>
     <Hero/>
     <ForTheCommitted/>
     <Features/>
     <Jointhecommunity/>
   </div>
  );
}
