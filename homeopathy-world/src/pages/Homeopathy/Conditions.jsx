 
 
 
 const Conditions  = () => {
  return (
 <section className="py-20 bg-gradient-to-b from-blue-950 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center mb-12">
          <span className="text-cyan-400 uppercase text-sm">
            Sumitra Homeopathy Clinic Services
          </span>
          <h2 className="text-3xl font-bold mt-3 text-white">
            Conditions We Treat
          </h2>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            "Female Complaints",
            "Skin Complaints",
            "Pediatric Diseases",
            "Bones & Joints",
            "Stomach Problems",
            "ENT Problems",
            "Neurology",
            "Dermatology",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition "
            >
              <h4 className="font-bold mb-2 text-white">{item}</h4>
              <p className="text-sm text-gray-300">
                Effective homeopathic treatment focused on long-term relief.
              </p>
              <span className="inline-block mt-4 text-cyan-400 text-sm">
                Read More →
              </span>
            </div>
          ))}
        </div>
      </section>
      );
    };
    export default Conditions;