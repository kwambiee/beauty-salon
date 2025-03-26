import Footer from "@/components/ui/footer";
import Image from "next/image";

const services = [
  {
    title: "Nail Salon – Stunning Nails, Every Time!",
    description:
      "Whether you love simple elegance or bold, trendy designs, our nail experts will make your nails look flawless. From classic polishes to gel extensions, we offer high-quality nail artistry that lasts!",
    imageUrl:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_01.jpg",
    link: "https://preview.lsvr.sk/beautyspot/services/cosmetics/",
  },
  {
    title: "Manicure & Pedicure – Treat Your Hands & Feet!",
    description:
      "Give your hands and feet the care they deserve. Our manicures and pedicures include deep cleansing, exfoliation, cuticle care, and hydrating treatments, leaving you refreshed and polished.",
    imageUrl:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_02.jpg",
    link: "https://preview.lsvr.sk/beautyspot/services/hairdressing/",
  },
  {
    title: "Barber Services – Sharp Cuts for the Modern Gentleman!",
    description:
      "Stay sharp and stylish with our precision barbering services. We provide clean fades, trims, and shaves, ensuring you leave looking fresh and confident.",
    imageUrl:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_03.jpg",
    link: "https://preview.lsvr.sk/beautyspot/services/barber/",
  },
  {
    title: "Massages & Body Treatments (Coming Soon!)",
    description:
      "Relax, de-stress, and treat yourself to a soothing massage. Our body treatments will soon be available to help you feel rejuvenated from head to toe. Stay tuned!",
    imageUrl:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/service_03.jpg",
    link: "https://preview.lsvr.sk/beautyspot/services/barber/",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 absolute w-[70%] right-0 h-full">
      <div className=" container mx-auto ">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        </header>

        <div className="px-4">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
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
                  <a
                    href={service.link}
                    className="block mt-4 text-[#ff007c] shadow hover:shadow-lg font-medium"
                  >
                    More Info →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
