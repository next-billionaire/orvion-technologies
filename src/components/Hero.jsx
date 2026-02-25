import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Hero(){

  const handleAudit = (e)=>{
    e.preventDefault();

    const data={
      name:e.target.name.value,
      business:e.target.business.value,
      phone:e.target.phone.value,
      email:"not_provided"
    };

    emailjs.send(
      "service_ed645ik",
      "template_16m5dgq",
      data,
      "seN_ZeFks9wEmjqVH"
    ).then(()=>{
      alert("✅ Audit request sent successfully!");
      e.target.reset();
    }).catch(()=>{
      alert("❌ Something went wrong. Please try again.");
    });
  };

  return(
    <section id="home" className="pt-32 pb-24 bg-gradient-to-br from-indigo-50 to-purple-50">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Orvion Technologies
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            We build websites that don’t just look good — they bring clients.
            From local businesses to startups, we create digital systems that convert visitors into customers.
          </p>

          {/* AUDIT FORM */}
          <form onSubmit={handleAudit} className="mt-8 space-y-3">

            <input
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              name="business"
              placeholder="Business type (Cafe, Salon, etc)"
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              name="phone"
              placeholder="Phone number"
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="bg-primary text-white w-full py-3 rounded-xl hover:scale-105 shadow-lg transition"
            >
              Get Free Website Audit
            </button>

          </form>

          <p className="text-sm text-gray-500 mt-3">
            We usually respond within 24 hours
          </p>

        </motion.div>

        {/* RIGHT TRUST IMAGE */}
        <div className="h-[420px] rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="team working"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  )
}