import Image from "next/image";
import Link from "next/link";

const ServiceDetail = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-4">
        <ul className="flex space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/services" className="hover:text-gray-700">
              Our Services
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Cosmetics</h1>

      {/* Service Description */}
      <p className="text-gray-600 mb-6">
        Cosmetics are substances or products used to enhance or alter the
        appearance of the face or fragrance and texture of the body. Many
        cosmetics are designed for application to the face, hair, and body.
      </p>

      {/* Service Pricing Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Service</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {[
              { service: "Wash", price: "$10.50" },
              { service: "Cut and Finish", price: "$19.99" },
              { service: "Blow Dries", price: "$14.00" },
              { service: "Hair Colouring", price: "$12.50" },
              { service: "Evening Hairdressing", price: "$18.99" },
            ].map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border p-2">{item.service}</td>
                <td className="border p-2">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Gallery */}
      <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "/gallery_01.jpg",
          "/gallery_08.jpg",
          "/gallery_02.jpg",
          "/gallery_03.jpg",
          "/gallery_06.jpg",
        ].map((src, index) => (
          <div key={index} className="w-full h-48 relative">
            <Image
              src={src}
              alt="Gallery image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
