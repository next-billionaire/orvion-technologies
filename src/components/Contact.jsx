// src/components/Contact.jsx

import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact(){
  return(
    <section id="contact" className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Contact Orvion Technologies
        </h2>

        <p className="text-center text-gray-600 mb-14 max-w-xl mx-auto">
          Have questions or want to discuss your project? Reach out through any platform below.
          We respond quickly and help you get started.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT INFO */}
          <div className="bg-white p-8 rounded-2xl shadow space-y-5">

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary"/>
              <span>+91 8520003931</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary"/>
              <span>nextbillionaire056@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-primary"/>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" className="hover:text-primary">
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram className="text-primary"/>
              <a href="#" target="_blank" className="hover:text-primary">
                Instagram Page
              </a>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1"/>
              <span>Vijayawada, Andhra Pradesh, India</span>
            </div>

          </div>

          {/* RIGHT COMPANY CARD */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-8 rounded-2xl shadow">

            <h3 className="text-xl font-semibold mb-3">
              Work with Orvion
            </h3>

            <p className="text-sm opacity-90">
              We partner with businesses to create websites that generate visibility,
              build trust and convert visitors into clients. Whether you need a business website,
              e-commerce platform or AI-powered automation — we’re ready to help.
            </p>

            <p className="mt-5 text-sm opacity-80">
              Prefer quick conversation? Message us directly on WhatsApp.
            </p>

            <a
              href="https://wa.me/918520003931"
              target="_blank"
              className="inline-block mt-5 bg-white text-primary px-5 py-2 rounded-lg font-medium"
            >
              Start Chat
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}