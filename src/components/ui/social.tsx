import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-[#ff007c] transition-colors text-white bg-white/25 p-3 rounded-full"
      >
        <FaInstagram />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl  hover:text-[#ff007c] transition-colors text-white bg-white/25 p-3 rounded-full"
      >
        <FaXTwitter />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-[#ff007c] transition-colors text-white bg-white/25 p-3 rounded-full"
      >
        <FaFacebook />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-white bg-white/25 p-3 rounded-full hover:text-[#ff007c] transition-colors"
      >
        <FaTiktok />
      </a>
    </div>
  );
};

export default Socials;
