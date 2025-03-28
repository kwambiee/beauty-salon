const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" w-full">
      <footer className="bg-gray-900 text-white py-5 mt-8">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400 mb-4">
                Welcome to Glamour Beauty Salon, where we offer professional
                hair, nail, and skincare services.
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">
                Makina Stage, Toi Mkt, Kibera Drive
              </p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: yakira@gmail.com</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 text-center text-gray-400 border-t pt-4">
            <p>
              &copy; {currentYear} Yakira Beauty Salon. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
