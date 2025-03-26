import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Contact</h1>
      </header>

      {/* Google Map */}
      <div className="mb-10">
        <iframe
          src="https://maps.google.com/maps?q=34.090866,-118.388228&z=15&output=embed"
          width="100%"
          height="300"
          className="border rounded-lg"
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="text-center">
          <h3 className="text-xl font-semibold">Our HQ</h3>
          <p>9015 Sunset Boulevard, CA 90069</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Opening Hours</h3>
          <p>
            Mon - Fri: 10am - 4pm
            <br /> Sat: 9am - 2pm
            <br /> Sun: Closed
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Get In Touch</h3>
          <p>
            (123) 456 789
            <br /> example@example.org
          </p>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-10" />

      {/* Contact Form */}
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Make An Appointment
      </h3>
      <form className="max-w-2xl mx-auto grid gap-6">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Your Phone"
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="input-field"
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="date" className="input-field" required />
          <select className="input-field" required>
            {Array.from({ length: 15 }, (_, i) => (
              <option
                key={i}
                value={`${9 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`}
              >
                {9 + Math.floor(i / 2)}:{i % 2 === 0 ? "00" : "30"}
              </option>
            ))}
          </select>
        </div>
        <textarea
          placeholder="Your Message"
          className="input-field h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
