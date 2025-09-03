import React, { useState } from "react";

const faqsData = [
  {
    question: "What is PhysioSpot?",
    answer:
      "PhysioSpot is an online platform where patients can connect with physiotherapists, book appointments, and access healthcare services easily.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can browse available doctors, select your preferred time slot, and confirm your appointment through our secure booking system.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major debit/credit cards, UPI, and online wallets. All payments are processed securely through our payment gateway.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, you can cancel or reschedule appointments from your account dashboard, subject to our Refund Policy.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We follow strict data protection practices and ensure that all personal information is stored securely.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-headingColor mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-headingColor hover:text-[#0067FF]"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
