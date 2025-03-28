"use client";
import React from "react";
import HeroSlider from "@/components/ui/swipe";
import Services from "@/components/ui/services";
import Testimonials from "@/components/ui/testimonials";

const Home = () => {
  return (
    <div className="bg-[#fff] h-full w-full">
      {/* slide section */}
      <HeroSlider />
      {/* Our Services */}
      <Services />
      {/* client Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Home;
