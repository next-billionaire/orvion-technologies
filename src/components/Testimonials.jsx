// src/components/Testimonials.jsx
export default function Testimonials(){

  const proof=[
    {
      role:"Cafe Owner",
      result:"Built online presence and menu showcase",
      text:"Our customers now find us online easily.",
    },
    {
      role:"Real Estate Agent",
      result:"Lead generation landing page launched",
      text:"Started receiving property inquiries.",
    },
    {
      role:"Local Business",
      result:"Professional website with WhatsApp leads",
      text:"Clients contact us directly through website.",
    }
  ];

  return(
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-4">
          Client Results & Feedback
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Businesses we helped establish their digital presence
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {proof.map((p,i)=>(
            <div key={i} className="bg-white p-7 rounded-xl shadow-lg hover:scale-105 transition">

              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-indigo-100 mb-4"/>

              {/* Client type */}
              <h3 className="font-semibold">{p.role}</h3>

              {/* Result */}
              <p className="text-primary text-sm mt-1 font-medium">
                {p.result}
              </p>

              {/* Feedback */}
              <p className="text-gray-600 mt-3 text-sm">
                "{p.text}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}