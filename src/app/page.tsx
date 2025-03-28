"use client";
import React, { useState } from "react";
import HeroSlider from "@/components/ui/swipe";
import Services from "@/components/ui/services";
import Testimonials from "@/components/ui/testimonials";
import Footer from "@/components/ui/footer";

const Home = () => {
  const [open, setOpen] = useState(false);

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
