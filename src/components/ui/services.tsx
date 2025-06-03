"use client";
import React from "react";

type Service = {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "Nail Salon",
    description:
      "Whether you love simple elegance or bold, trendy designs, our nail experts will make your nails look flawless.",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_01-700x464.jpg",
    link: "",
    icon: "💄",
  },
  {
    title: "Manicure & Pedicure",
    description:
      "Our manicures and pedicures include deep cleansing, exfoliation, cuticle care, and hydrating treatments, leaving you refreshed and polished.",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_02-700x464.jpg",
    link: "",
    icon: "💇‍♀️",
  },
  {
    title: "Barber(Coming Soon!)",
    description:
      "We provide clean fades, trims, and shaves, ensuring you leave looking fresh and confident.",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_03-700x464.jpg",
    link: "",
    icon: "✂️",
  },
  {
    title: " Massages & Body Treatments(Coming Soon!)",
    description:
      " Our body treatments will soon be available to help you feel rejuvenated from head to toe. Stay tuned!",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_04-700x464.jpg",
    link: "",
    icon: "💆‍♀️",
  },
  // {
  //   title: "Body Treatments",
  //   description:
  //     "A manicure is a cosmetic beauty treatment for the fingernails and hands performed at home or in a nail salon.",
  //   image:
  //     "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_05-700x464.jpg",
  //   link: "https://preview.lsvr.sk/beautyspot/services/body-treatments/",
  //   icon: "🌿",
  // },
  // {
  //   title: "Aromatherapy",
  //   description:
  //     "Aromatherapy uses aromatic materials, including essential oils, and other aroma compounds, with claims for improving well-being.",
  //   image:
  //     "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_06-700x464.jpg",
  //   link: "https://preview.lsvr.sk/beautyspot/services/aromatherapy/",
  //   icon: "🕯️",
  // },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Our salon offers a wide variety of beauty services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Background Image */}
              <div
                className="h-64 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Content */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-6 py-4">
                {/* Icon */}
                <div className="text-5xl mt-4">{service.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-center text-sm mb-4 opacity-90">
                  {service.description}
                </p>

                {/* Button */}
                <a
                  href={service.link}
                  className="bg-yellow-500 text-gray-900 font-semibold py-1 px-4 rounded-full transition-all duration-300 hover:bg-yellow-600"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
