/* eslint-disable react/no-unescaped-entities */
import React from "react";

const TermsOfService = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-headingColor mb-6">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          These Terms of Service govern your use of PhysioSpot's website,
          applications, and services. By accessing or using our platform, you
          agree to comply with these terms. Please read them carefully.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            1. Eligibility
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To use our services, you must be at least 18 years old or have the
            consent of a parent or legal guardian. By using the platform, you
            confirm that you meet these requirements.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            2. Account Registration
          </h2>
          <p className="text-gray-600 leading-relaxed">
            When registering for an account, you agree to provide accurate and
            complete information. You are responsible for safeguarding your
            login credentials and for all activity under your account.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            3. Prohibited Activities
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You agree not to engage in any unlawful, abusive, or disruptive
            activities on our platform. Misuse of the platform may result in
            suspension or termination of your account.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All content, trademarks, and resources on PhysioSpot are the
            property of PhysioSpot and are protected by copyright laws. You may
            not copy, distribute, or modify any content without prior written
            permission.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            5. Termination of Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to suspend or terminate your access to our
            services at any time if you violate these Terms of Service or engage
            in harmful behavior.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            6. Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            PhysioSpot may update these Terms of Service from time to time.
            Updated terms will be posted on this page with the effective date.
            Continued use of our services implies acceptance of any changes.
          </p>
        </div>

        <p className="text-gray-600 italic">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;
