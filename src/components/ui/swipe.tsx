"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Welcome to Yakira Beauty Salon – ",
    text: "Where Beauty Comes to Life!",
    buttonText: "See Our Services",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/slide_01.jpg",
    link: "/services",
  },
  {
    title: "Nail Perfection, Hair Glam, & Pampering",
    text: " All in One Place",
    buttonText: "See Our Designs",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/slide_02.jpg",
    link: "",
  },
  {
    title: " Find Us at Toi Market",
    text: "Your Trusted Beauty Destination",
    buttonText: "See where we are",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/slide_03.jpg",
    link: "",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        loop
        pagination={{ clickable: true }}
        className="h-[300px] md:h-[400px] lg:h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6">{slide.text}</p>
                <a
                  href={slide.link}
                  className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg text-lg font-semibold transition"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
