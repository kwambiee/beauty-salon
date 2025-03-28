import Image from "next/image";

const teamMembers = [
  {
    name: "Vivien Hawkins",
    role: "Makeup Specialist",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_01-300x300.jpg",
    description:
      "Cosmetics that are meant to be used on the face and eye area are usually applied with a brush, a makeup sponge.",
    social: { facebook: "#facebook", twitter: "#twitter" },
  },
  {
    name: "Rudy Martinez",
    role: "Body Treatments",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_02-300x300.jpg",
    description:
      "The European spas provided various other diversions for guests after the bath, including gambling, horse racing.",
    social: { facebook: "#facebook", twitter: "#twitter" },
  },
  {
    name: "Matthew Hernandez",
    role: "Barber and Hairdresser",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_03-300x300.jpg",
    description:
      "The barber pole, featuring red and white spiraling stripes, symbolized different aspects of the craft.",
    social: { facebook: "#facebook", twitter: "#twitter" },
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a range of beauty and wellness services, including makeup, hairdressing, and spa treatments.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment via our website or by calling our service line.",
  },
  {
    question: "Do you offer home services?",
    answer:
      "Yes, we provide home services upon request, depending on the availability of our specialists.",
  },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Our Team Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-6">Our Team</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center"
            >
              <Image
                src={member.image}
                width={150}
                height={150}
                alt={member.name}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <h4 className="text-gray-500 mb-2">{member.role}</h4>
              <p className="text-gray-700 text-sm">{member.description}</p>
              <div className="flex justify-center space-x-4 mt-3">
                <a href={member.social.facebook} className="text-blue-600">
                  Facebook
                </a>
                <a href={member.social.twitter} className="text-blue-400">
                  Twitter
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
