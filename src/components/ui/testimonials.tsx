import Image from "next/image";

const testimonials = [
  {
    name: "Faith N.",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_01.jpg",
    testimonial:
      "The best nail salon in Toi Market! My gel nails lasted over 3 weeks. I love it here!",
  },
  {
    name: " Diana W.",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_03.jpg",
    testimonial:
      "The pedicure was so relaxing! My feet feel soft and smooth. Highly recommend!",
  },
  {
    name: "Sarah A.",
    image:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_02.jpg",
    testimonial:
      "A hidden gem! The team is so skilled, and the salon is super clean and welcoming.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our Clients &apos; Testimonials
          </h2>
          <p className="text-gray-400 mt-2">
            What our customers are saying about us
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#fff] p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <p className="text-gray-500 italic">
                &quot;{testimonial.testimonial}&quot;
              </p>
              <h4 className="text-lg font-semibold mt-4">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
