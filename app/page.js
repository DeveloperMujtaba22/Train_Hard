import Image from "next/image";
import Hero from "./_components/Hero";
import ForTheCommitted from "./_components/Forthecommitted";
import Features from "./_components/Features";
import Jointhecommunity from "./_components/Jointhecommunity";
import DiscoverPotential from "./_components/DiscoverPotential";
import JoinBanner from "./_components/JoinBanner";

export default function Home() {
  return (
   <div>
     <Hero/>
     <ForTheCommitted/>
     <Features/>
     <Jointhecommunity/>
     <DiscoverPotential/>
     <JoinBanner/>
   </div>
  );
}
