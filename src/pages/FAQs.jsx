import React, { useState } from "react";

const faqData = [
  {
    question: "What is GymFluencer?",
    answer:
      "GymFluencer is your go-to platform for personalized workout plans, diet recommendations, and fitness inspiration.",
  },
  {
    question: "How do I create a workout plan?",
    answer:
      "You can create a workout plan by signing up, selecting your fitness level, and choosing exercises from our library.",
  },
  {
    question: "Are the diet plans suitable for everyone?",
    answer:
      "Yes, our diet plans are customizable to suit individual needs, whether you're looking to lose weight, gain muscle, or maintain your health.",
  },
  {
    question: "Can I access GymFluencer on my mobile device?",
    answer:
      "Absolutely! GymFluencer is fully responsive and can be accessed on any mobile or desktop device.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 7-day free trial for you to explore all our features and decide if GymFluencer is right for you.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6 lg:px-16">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Got questions? We have answers! Explore our FAQs below.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm overflow-hidden transition-all duration-300 bg-gray-100"
          >
            {/* Question */}
            <button
              className="w-full text-left px-6 py-4 text-gray-800 font-medium flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <div
                className={`px-6 py-4 text-gray-600 text-sm transition-opacity duration-500`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
