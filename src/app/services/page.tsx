import Footer from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Nail Salon",
    description:
      "Explore our collection of trendy, elegant, and timeless nail designs that will make your nails stand out and look effortlessly beautiful.",
    imageUrl:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_01.jpg",
    // link: "https://preview.lsvr.sk/beautyspot/services/cosmetics/",
  },
  {
    id: 2,
    title: "Manicure & Pedicure",
    description:
      "Give your hands and feet the care they deserve. Our manicures and pedicures include deep cleansing, exfoliation, cuticle care, and hydrating treatments, leaving you refreshed and polished.",
    imageUrl:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_02.jpg",
    // link: "https://preview.lsvr.sk/beautyspot/services/hairdressing/",
  },
  {
    id: 3,
    title: "Manicure & Pedicure",
    description:
      "Give your hands and feet the care they deserve. Our manicures and pedicures include deep cleansing, exfoliation, cuticle care, and hydrating treatments, leaving you refreshed and polished.",
    imageUrl:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_02.jpg",
    // link: "https://preview.lsvr.sk/beautyspot/services/hairdressing/",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
      </header>

      <div className="px-4">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={800}
                height={530}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="block mt-4 text-[#ff007c] shadow hover:shadow-lg font-medium"
                >
                  More Info →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
