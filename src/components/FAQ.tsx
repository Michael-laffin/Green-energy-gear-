import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is a solar generator?",
    answer: "A solar generator is a portable power station that can be charged using solar panels. It stores energy in a battery and provides AC and DC power outputs for various devices."
  },
  {
    question: "How long does it take to charge a Jackery power station?",
    answer: "Charging time varies depending on the model and charging method. Using solar panels, it can take 4-8 hours in optimal conditions. Wall charging typically takes 5-7 hours for full capacity."
  },
  {
    question: "Can I use Jackery products while they're charging?",
    answer: "Yes, Jackery power stations support pass-through charging, allowing you to use the device while it's being charged."
  },
  {
    question: "What's the lifespan of a Jackery power station?",
    answer: "Jackery power stations use high-quality lithium-ion batteries that can last for 500+ charge cycles while maintaining 80% capacity. With proper care, they can last for several years."
  },
  {
    question: "Are Jackery products waterproof?",
    answer: "While Jackery products are designed for outdoor use, they are not fully waterproof. They have some water resistance but should be protected from direct exposure to water or heavy rain."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;