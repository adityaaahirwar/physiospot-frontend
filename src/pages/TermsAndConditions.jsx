/* eslint-disable react/no-unescaped-entities */
import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-headingColor mb-6">
          Terms & Conditions
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to PhysioSpot! These Terms and Conditions outline the rules
          and regulations for using our website and services. By accessing or
          using our platform, you agree to comply with these terms.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing this website, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions. If
            you do not agree, please discontinue use of our services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            2. Use of Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our services are intended for personal, non-commercial use. You
            agree not to misuse, copy, or resell any content, tools, or
            resources provided by PhysioSpot without prior written consent.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            3. Appointments & Payments
          </h2>
          <p className="text-gray-600 leading-relaxed">
            When booking an appointment, you agree to provide accurate
            information. Payments made through our platform are subject to our
            Refund Policy. PhysioSpot reserves the right to cancel or reschedule
            appointments as necessary.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            4. User Responsibilities
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for maintaining the confidentiality of your
            account credentials. Any activity under your account will be
            considered your responsibility.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            PhysioSpot is not liable for any damages arising from the use of our
            website or services, including but not limited to indirect, incidental,
            or consequential damages.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            6. Governing Law
          </h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms & Conditions shall be governed by and construed in
            accordance with the laws of India, without regard to its conflict of
            law provisions.
          </p>
        </div>

        <p className="text-gray-600 italic">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
