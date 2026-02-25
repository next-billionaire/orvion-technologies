// src/components/WhatsAppFloat.jsx

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat(){
  return(
    <a
      href="https://wa.me/918520003931"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:shadow-xl transition z-50"
    >
      <FaWhatsapp size={20}/>
      <span className="hidden md:block text-sm font-medium">Chat</span>
    </a>
  )
}