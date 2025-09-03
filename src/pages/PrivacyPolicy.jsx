/* eslint-disable react/no-unescaped-entities */
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-headingColor mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your privacy is important to us. This Privacy Policy explains how
          PhysioSpot collects, uses, and safeguards your personal information
          when you use our website and services.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may collect personal information such as your name, email
            address, phone number, and health-related details when you book
            appointments or interact with our platform. We also collect
            non-personal data like browser type, device information, and usage
            statistics.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your information helps us provide better services, process
            appointments, send important updates, and improve user experience.
            We may also use anonymized data for analytics and research.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            3. Sharing of Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell or trade your personal data. However, we may share
            information with trusted partners and service providers who assist
            us in operating our platform, subject to confidentiality agreements.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            4. Data Security
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We implement security measures to protect your data against
            unauthorized access, alteration, or disclosure. However, no method
            of transmission over the internet is 100% secure.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            5. Your Rights
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You may request access, correction, or deletion of your personal
            data. If you wish to exercise these rights, please contact us at
            support@physiospot.com.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            6. Updates to Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with the updated date.
          </p>
        </div>

        <p className="text-gray-600 italic">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
