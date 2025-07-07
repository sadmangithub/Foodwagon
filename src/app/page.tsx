"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GreysVage from "@/components/GreysVage";
import Work from "@/components/Work";
import Popular from "@/components/Popularitems";
import Featured from "@/components/Featured";
import Searchby from "@/components/Searchby";
import Dailydiscount from "@/components/Dailydiscount";
export default function Home() {
  return (
    <>
      <Navbar />;
      <HeroSection />
      <GreysVage />
      <Work />
      <Popular />
      <Featured />
      <Searchby />
      <Dailydiscount />
    </>
  );
}
