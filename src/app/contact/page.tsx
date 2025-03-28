// app/contact/page.tsx
import React from "react";

const Contact = () => {
  return (
    <main id="main" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Map Section */}
        <iframe
          src="https://maps.google.com/maps?q=34.090866,-118.388228&z=15&output=embed"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          className="rounded-lg shadow-md"
        ></iframe>

        <div className="h-16" aria-hidden="true"></div>

        {/* Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Address */}
          <div className="flex items-start">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3 text-gray-700">📍</span>
                <h3 className="text-xl font-semibold text-gray-800">Our HQ</h3>
              </div>
              <p className="text-gray-600 ml-9">
                9015 Sunset Boulevard
                <br />
                Ca 90069
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3 text-gray-700">🕒</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  Opening Hours
                </h3>
              </div>
              <p className="text-gray-600 ml-9">
                Mo. – Fr.: 10am – 4pm
                <br />
                Sa.: 9am – 2pm
                <br />
                Su: Closed
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3 text-gray-700">📞</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  Get In Touch
                </h3>
              </div>
              <p className="text-gray-600 ml-9">
                (123) 456 789
                <br />
                example@example.org
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 my-8" />

        {/* Form Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Make An Appointment
          </h3>
          <p className="text-gray-600 mb-8">
            This form uses a dummy email address. If you want to ask about the
            theme, please use the{" "}
            <a
              href="https://themeforest.net/item/beautyspot-wordpress-theme-for-beauty-salons/8020062/comments"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              comments section
            </a>{" "}
            on item description page.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="contact-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="contact-email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Phone
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="contact-phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="contact-subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-reservation-date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="contact-reservation-date"
                  name="contact-reservation-date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-reservation-time"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Time
                </label>
                <select
                  id="contact-reservation-time"
                  name="contact-reservation-time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="9:00">9:00</option>
                  <option value="9:30">9:30</option>
                  <option value="10:00">10:00</option>
                  <option value="10:30">10:30</option>
                  <option value="11:00">11:00</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="14:30">14:30</option>
                  <option value="15:00">15:00</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What Services Are You Interested In
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="service-facials"
                    name="contact-services[]"
                    value="Facials"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="service-facials"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Facials
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="service-eyebrow"
                    name="contact-services[]"
                    value="Eyebrow & Eyelashes"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="service-eyebrow"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Eyebrow & Eyelashes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="service-wash"
                    name="contact-services[]"
                    value="Wash"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="service-wash"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Wash
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="service-cut"
                    name="contact-services[]"
                    value="Cut & Finish"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="service-cut"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Cut & Finish
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="service-blow"
                    name="contact-services[]"
                    value="Blow Dries"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="service-blow"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Blow Dries
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="service-colouring"
                    name="contact-services[]"
                    value="Hair Colouring"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="service-colouring"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Hair Colouring
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="contact-message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
