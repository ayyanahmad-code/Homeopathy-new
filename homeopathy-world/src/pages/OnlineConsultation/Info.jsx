 
 
 
 
 const Info = () => {
 return (
 <section className="pb-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          
          {/* Visit Center */}
          <div className="bg-cyan-50 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-3">Visit Our Center</h3>
            <p className="text-gray-600 mb-4">
              We are committed to delivering the best homeopathic care.
            </p>
            <p className="text-sm text-gray-700">
              Office: 301, Near 11 No. Stop, E-7, Arera Colony, Bhopal, MP
            </p>
            <button className="mt-6 text-cyan-700 font-medium">
              Share your Homeopathy Medicines →
            </button>
          </div>

          {/* Opening Hours */}
          <div className="bg-cyan-600 text-white rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Monday – Thursday</span>
                <span>17:30 PM – 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>17:30 PM – 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>17:30 PM – 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>WhatsApp Only</span>
              </li>
            </ul>

            <button className="mt-6 underline text-sm">
              24/7 Service For Emergencies →
            </button>
          </div>
        </div>
      </section>
      );
    };
    export default Info;