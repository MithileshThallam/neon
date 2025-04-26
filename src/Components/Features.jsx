const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white text-center">
      <h2 className="text-4xl font-bold mb-12">Features</h2>
      <div className="grid md:grid-cols-3 gap-12 px-6">
        {/* Feature 1 */}
        <div className="p-8 shadow rounded bg-gray-50 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-3">Easy Scheduling</h3>
          <p className="text-gray-600">Manage and schedule tasks effortlessly with a user-friendly interface.</p>
        </div>

        {/* Feature 2 */}
        <div className="p-8 shadow rounded bg-gray-50 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-3">Performance Tracking</h3>
          <p className="text-gray-600">Analyze progress and gain insights to improve your efficiency every day.</p>
        </div>

        {/* Feature 3 */}
        <div className="p-8 shadow rounded bg-gray-50 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-3">Instant Notifications</h3>
          <p className="text-gray-600">Stay informed with real-time alerts and updates, no delays.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
