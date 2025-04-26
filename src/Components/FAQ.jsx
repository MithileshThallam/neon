const FAQ = () => {
    return (
      <section id="faq" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto text-left space-y-8 px-6">
          
          {/* Question 1 */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Can I cancel my subscription anytime?</h4>
            <p className="text-gray-600">
              Yes, you can cancel your subscription at any time from your account settings without any hidden fees.
            </p>
          </div>
  
          {/* Question 2 */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Is there a free trial available?</h4>
            <p className="text-gray-600">
              Absolutely! We offer a 14-day free trial with full access to all features.
            </p>
          </div>
  
          {/* Question 3 */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h4>
            <p className="text-gray-600">
              You can switch plans anytime as per your requirements through your dashboard.
            </p>
          </div>
  
          {/* Question 4 */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Do you offer customer support?</h4>
            <p className="text-gray-600">
              Yes, our support team is available 24/7 to assist you with any queries.
            </p>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default FAQ;
  