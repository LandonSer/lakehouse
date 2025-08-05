"use client";

import About from "@/components/sections/about";
import { mockHeaderImg } from "../../data/mock-data";
import { mockHeaderText } from "../../data/mock-data";
import Hero from "../components/hero";
import Amenities from "@/components/sections/amenities";
import Gallery from "@/components/sections/gallery";
import Weather from "@/components/sections/weather";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);
  
    const heroProps = {
        heroImg: mockHeaderImg[0].url,
        heroMainText: mockHeaderText[0].text,
        heroSubText: mockHeaderText[1].text,
    };

  return (
    <main className="scroll-smooth [&>*:nth-child(odd)]:bg-blue-50">
      <Hero heroValues = {heroProps} />
      <About />
      <Gallery />
      <Amenities />
      <Weather />
    </main>
  );
}