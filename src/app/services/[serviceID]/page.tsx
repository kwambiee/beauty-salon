"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/ui/footer";

type Service = {
  id: number;
  name: string;
  description: string;
  prices: { service: string; price: string }[];
};

const services: Service[] = [
  {
    id: 1,
    name: "Cosmetics",
    description:
      "Cosmetics are substances or products used to enhance or alter the appearance...",
    prices: [
      { service: "Wash", price: "$10.50" },
      { service: "Cut and Finish", price: "$19.99" },
      { service: "Blow Dries", price: "$14" },
      { service: "Hair Colouring", price: "$12.50" },
      { service: "Evening Hairdressing", price: "$18.99" },
    ],
  },
  {
    id: 2,
    name: "Hairdressing",
    description:
      "Hairdressing services include cutting, styling, and treating hair...",
    prices: [],
  },
  {
    id: 3,
    name: "Barber",
    description:
      "Barber services include haircuts, shaves, and grooming for men...",
    prices: [],
  },
  {
    id: 4,
    name: "Massages",
    description:
      "Massage services for relaxation, therapeutic benefits, and stress relief...",
    prices: [],
  },
  {
    id: 5,
    name: "Body Treatments",
    description: "Body treatments include skin care, exfoliation, and more...",
    prices: [],
  },
  {
    id: 6,
    name: "Aromatherapy",
    description:
      "Aromatherapy involves the use of essential oils for relaxation and health benefits...",
    prices: [],
  },
];

const images = [
  "/nails/nails_1.jpg",
  "/nails/nails_2.jpg",
  "/nails/nails_3.jpg",
  "/nails/nails_5.jpg",
];

export default function ServicePage({
  params,
}: {
  params: Promise<{ serviceID: string }>;
}) {
  const router = useRouter();
  const [serviceID, setServiceID] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setServiceID(resolvedParams.serviceID);
      const service = services.find(
        (s) => s.id === Number(resolvedParams.serviceID)
      );
      setSelectedService(service || services[0]);
    });
  }, [params]);

  const handleSelectedService = (service: Service) => {
    setSelectedService(service);
    router.push(`/services/${service.id}`); // Update URL
  };

  return (
    <div className="h-full bg-gray-100 py-10">
      <div className="flex p-8  w-full">
        <aside className="w-1/4 pr-6">
          <h2 className="text-xl font-bold mb-4">SERVICES</h2>
          <ul>
            {services.map((service) => (
              <li
                key={service.id}
                className={`cursor-pointer py-2 px-4 mb-2 rounded ${
                  selectedService?.id === service.id
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleSelectedService(service)}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </aside>
        <main className="w-3/4">
          {selectedService ? (
            <>
              <h1 className="text-3xl font-bold mb-4">
                {selectedService.name}
              </h1>
              <p className="mb-6">{selectedService.description}</p>
              {selectedService.prices.length > 0 && (
                <table className="w-full border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-300">
                      <th className="p-2">SERVICE</th>
                      <th className="p-2">PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedService.prices.map((item, idx) => (
                      <tr key={idx} className="border-t border-gray-300">
                        <td className="p-2">{item.service}</td>
                        <td className="p-2">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          ) : (
            <p>Loading service details...</p>
          )}
          <h2 className="text-2xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-3 gap-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Gallery"
                className="w-full h-32 object-cover rounded"
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
