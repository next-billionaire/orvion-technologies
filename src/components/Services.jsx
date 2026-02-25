export default function Services(){
  return(
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Services we are providing
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-7 rounded-xl shadow">
            <h3 className="font-semibold text-xl">Business Websites</h3>
            <p className="mt-3 text-gray-600">
              We create professional websites for salons, restaurants, cafes,
              real estate agents, gyms, clinics and local businesses to attract more customers online.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl shadow">
            <h3 className="font-semibold text-xl">E-commerce Websites</h3>
            <p className="mt-3 text-gray-600">
              Sell products online with secure payments, mobile-friendly design
              and conversion-focused store experience.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl shadow">
            <h3 className="font-semibold text-xl">Landing Pages</h3>
            <p className="mt-3 text-gray-600">
              High-converting pages for ads and campaigns designed to capture leads.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl shadow">
            <h3 className="font-semibold text-xl">AI Chatbot Integration</h3>
            <p className="mt-3 text-gray-600">
              Smart AI assistants on your website that answer customer questions,
              capture leads and automate support conversations.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}