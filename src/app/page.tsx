"use client";
import React, { useState } from "react";
import HeroSlider from "@/components/ui/swipe";
import Services from "@/components/ui/services";
import Testimonials from "@/components/ui/testimonials";
import Footer from "@/components/ui/footer";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" w-full ">
      <div className=" absolute right-0 w-[70%] bg-[#fff] h-full">
        {/* slide section */}
        <HeroSlider />
        {/* Our Services */}
        <Services />
        {/* client Testimonials */}
        <Testimonials />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
