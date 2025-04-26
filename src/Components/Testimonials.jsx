const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-100 to-white text-center">
      <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        
        {/* Testimonial 1 */}
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Alex Johnson"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="italic text-gray-600 mb-3">
            "NeonBox transformed my workflow. Highly recommend!"
          </p>
          <h4 className="font-semibold">Alex Johnson</h4>
          <p className="text-sm text-gray-500">Product Manager</p>
        </div>

        {/* Testimonial 2 */}
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Priya Sharma"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="italic text-gray-600 mb-3">
            "Sleek design and easy to use. Best experience ever!"
          </p>
          <h4 className="font-semibold">Priya Sharma</h4>
          <p className="text-sm text-gray-500">UI/UX Designer</p>
        </div>

        {/* Testimonial 3 */}
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <img
            src="https://randomuser.me/api/portraits/men/76.jpg"
            alt="John Doe"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="italic text-gray-600 mb-3">
            "Support is fantastic. Quick solutions to any problem."
          </p>
          <h4 className="font-semibold">John Doe</h4>
          <p className="text-sm text-gray-500">Tech Entrepreneur</p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
