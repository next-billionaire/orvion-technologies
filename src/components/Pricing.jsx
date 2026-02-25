// src/components/Pricing.jsx
export default function Pricing(){

  const plans=[
    {
      name:"Starter",
      price:"₹6999",
      features:[
        "5 page website",
        "Mobile responsive",
        "Contact form",
        "Basic SEO",
        "Free domain (limited)"
      ],
      highlight:false
    },
    {
      name:"Business",
      price:"₹12,999",
      features:[
        "10 page website",
        "Advanced UI design",
        "Speed optimization",
        "WhatsApp integration",
        "Lead capture setup"
      ],
      highlight:true
    },
    {
      name:"E-commerce",
      price:"₹19,999",
      features:[
        "Full online store",
        "Payment gateway",
        "Product management",
        "AI chatbot optional",
        "Order dashboard"
      ],
      highlight:false
    }
  ];

  return(
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-14">
          Simple transparent pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((p,i)=>(
            <div
              key={i}
              className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col 
              ${p.highlight ? "scale-105 border-2 border-primary" : ""}`}
            >

              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold">{p.name}</h3>

              <p className="text-3xl font-bold mt-3">{p.price}</p>

              <ul className="mt-6 space-y-2 text-gray-600 flex-1">
                {p.features.map((f,idx)=>(
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>

              <button className="mt-6 bg-primary text-white py-3 rounded-xl hover:scale-105 transition">
                Get Started
              </button>

            </div>
          ))}

        </div>

        <p className="text-center text-gray-500 mt-8">
          Need custom features? Contact us for tailored pricing.
        </p>

      </div>
    </section>
  )
}