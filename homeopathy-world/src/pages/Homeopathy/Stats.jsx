const Stat = () => {
return (
<section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            ["5k+", "Patients Served"],
            ["100%", "Client Satisfaction"],
            ["18+", "Years of Experience"],
            ["98%", "Prompt Resolution"],
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-cyan-700">{stat[0]}</h3>
              <p className="text-gray-600 text-sm mt-2">{stat[1]}</p>
            </div>
          ))}
        </div>
      </section>
      );
    };
    export default Stat;