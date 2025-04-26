const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        
        {/* Basic Plan */}
        <div className="p-8 bg-white rounded shadow hover:shadow-lg transition ">
          <h3 className="text-2xl font-semibold mb-4">Basic</h3>
          <p className="text-4xl font-bold mb-6">$9<span className="text-lg">/mo</span></p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔️ Access to basic features</li>
            <li>✔️ Email support</li>
            <li>✔️ Limited storage</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition hover:cursor-pointer">
            Choose Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="p-8 bg-white rounded shadow hover:shadow-lg transition ">
          <h3 className="text-2xl font-semibold mb-4">Pro</h3>
          <p className="text-4xl font-bold mb-6">$29<span className="text-lg">/mo</span></p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔️ All Basic features</li>
            <li>✔️ Priority email support</li>
            <li>✔️ Extra storage</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition hover:cursor-pointer">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="p-8 bg-white rounded shadow hover:shadow-lg transition ">
          <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
          <p className="text-4xl font-bold mb-6">$99<span className="text-lg">/mo</span></p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔️ All Pro features</li>
            <li>✔️ Dedicated support</li>
            <li>✔️ Unlimited storage</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition hover:cursor-pointer">
            Choose Plan
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
