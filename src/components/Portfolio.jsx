// src/components/Portfolio.jsx
export default function Portfolio(){

  const projects=[
    {
      title:"Cafe Website",
      desc:"Local cafe digital presence with menu & reservations",
      img:"https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
    },
    {
      title:"Real Estate Landing",
      desc:"Lead generation page for property listings",
      img:"https://images.unsplash.com/photo-1560518883-ce09059eeffa"
    },
    {
      title:"E-commerce Store",
      desc:"Modern online store with product catalog",
      img:"https://images.unsplash.com/photo-1556742031-c6961e8560b0"
    }
  ];

  return(
    <section id="portfolio" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-14">
          Some of our work
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p,i)=>(
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

              <div className="h-48 overflow-hidden">
                <img src={p.img} className="w-full h-full object-cover"/>
              </div>

              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{p.desc}</p>

                <button className="text-primary mt-3 text-sm font-medium">
                  View demo →
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}