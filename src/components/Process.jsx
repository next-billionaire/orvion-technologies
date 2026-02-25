export default function Process(){
  const steps=[
    "We understand your business",
    "We show design preview",
    "We develop your website",
    "You request revisions",
    "We launch your website"
  ];

  return(
    <section id="process" className="py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Process</h2>

        {steps.map((s,i)=>(
          <div key={i} className="bg-white p-5 rounded-xl shadow">
            {i+1}. {s}
          </div>
        ))}
      </div>
    </section>
  )
}