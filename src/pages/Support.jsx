// src/pages/Support.jsx
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Support</h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Need help? We're here to assist you. Reach out to our support team or browse FAQs.
      </p>

      {/* Quick Support Links */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Link
          to="/faqs"
          className="bg-blue-50 hover:bg-blue-100 p-6 rounded-2xl shadow-sm text-center"
        >
          <h3 className="text-xl font-semibold mb-2">FAQs</h3>
          <p className="text-gray-600 text-sm">Find answers to common questions.</p>
        </Link>

        <a
          href="mailto:support@physiospot.com"
          className="bg-green-50 hover:bg-green-100 p-6 rounded-2xl shadow-sm text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-gray-600 text-sm">Get help via email from our support team.</p>
        </a>

        <a
          href="tel:+911234567890"
          className="bg-yellow-50 hover:bg-yellow-100 p-6 rounded-2xl shadow-sm text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Call Support</h3>
          <p className="text-gray-600 text-sm">Reach us directly for urgent queries.</p>
        </a>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
        <form className="grid gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Describe your issue"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Support;
