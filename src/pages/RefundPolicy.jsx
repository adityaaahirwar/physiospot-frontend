/* eslint-disable react/no-unescaped-entities */
import React from "react";

const RefundPolicy = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-headingColor mb-6">
          Refund Policy
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At PhysioSpot, we strive to provide the best services to our users.
          This Refund Policy explains the terms and conditions under which
          refunds are issued for payments made through our platform.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            1. Appointment Cancellations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you wish to cancel your appointment, please do so at least 24
            hours in advance. Cancellations made within this time frame may be
            eligible for a full or partial refund, depending on the service
            booked.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            2. No-Show Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you fail to attend a scheduled appointment without prior notice,
            no refund will be issued. We encourage users to reschedule in
            advance to avoid such situations.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            3. Service Issues
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If there is a service disruption or failure caused by PhysioSpot,
            you may be eligible for a full refund. Please contact our support
            team with details, and we will review the case promptly.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            4. Processing of Refunds
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Approved refunds will be processed within 7–10 business days. The
            refund will be credited to the original payment method used during
            booking.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-headingColor mb-3">
            5. Non-Refundable Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Certain services, promotions, or discounted bookings may be
            non-refundable. Such terms will be clearly mentioned at the time of
            booking.
          </p>
        </div>

        <p className="text-gray-600 italic">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;
