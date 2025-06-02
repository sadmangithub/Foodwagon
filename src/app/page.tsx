"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GreysVage from "@/components/GreysVage";
import Work from "@/components/Work";
export default function Home() {
  return (
    <>
      <Navbar />;
      <HeroSection />
      <GreysVage />
      <Work />
    </>
  );
}
