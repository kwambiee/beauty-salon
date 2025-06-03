"use client";
import React from "react";
import HeroSlider from "@/components/ui/swipe";
import Services from "@/components/ui/services";
import Testimonials from "@/components/ui/testimonials";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const Home = () => {
  return (
    <div className="bg-[#fff] h-full w-full">
      {/* slide section */}
      <HeroSlider />
      {/* Our Services */}
      <Services />
      {/* client Testimonials */}
      <Testimonials />
      {/* Additional sections can be added here */}

      {/* Footer can be added here */}
      <Footer />
    </div>
  );
};

export default Home;
