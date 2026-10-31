import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919345577285?text=Hello%20Manikandan,%20I'm%20reaching%20out%20from%20your%20portfolio!"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
    >
      <FaWhatsapp size={26} className="shrink-0 group-hover:rotate-12 transition-transform duration-300" />
      <span className="max-w-0 opacity-0 group-hover:max-w-40 group-hover:opacity-100 group-hover:ml-2.5 whitespace-nowrap overflow-hidden transition-all duration-300 text-xs sm:text-sm font-bold tracking-wide">
        Chat with me
      </span>
    </a>
  );
};

export default WhatsAppButton;
