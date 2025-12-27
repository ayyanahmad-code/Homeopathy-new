

const About = () => {
return (
<section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1580281657521-6c6f3c57c9aa"
              className="rounded-2xl shadow"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1600959907703-bfbd4ed49f44"
              className="rounded-2xl shadow"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              className="rounded-2xl shadow col-span-2"
              alt=""
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-cyan-600 uppercase text-sm">
              About Sumitra Homeopathy Clinic
            </span>
            <h3 className="text-3xl font-bold mt-3 mb-4">
              Advance Homeopathic Care
            </h3>
            <p className="text-gray-600 mb-6">
              With over 18 years of clinical experience, we deliver trusted,
              natural, and holistic healing using safe and effective homeopathic
              treatments.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li>✔ Root Cause Based Treatment</li>
              <li>✔ Modern Diagnostic Support</li>
              <li>✔ Non-Invasive Healing</li>
              <li>✔ Chronic Disease Management</li>
            </ul>

            <div className="flex gap-4 mt-8">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full">
                About Us →
              </button>
              <div className="text-sm font-semibold text-gray-700 flex items-center">
                📞 +91 91091 02650
              </div>
            </div>
          </div>
        </div>
      </section>
      );
    };
    export default About;