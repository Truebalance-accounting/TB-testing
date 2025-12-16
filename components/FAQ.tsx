import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "What software do you specialize in?",
    answer: "We are Certified QuickBooks ProAdvisors and specialize in QuickBooks Online and Desktop. We can also assist with Xero and Sage upon request."
  },
  {
    question: "How does the monthly bookkeeping service work?",
    answer: "You provide us with access to your bank statements and receipts (digitally). We categorize transactions, reconcile accounts, and send you monthly financial reports."
  },
  {
    question: "Do you handle personal tax returns?",
    answer: "Our primary focus is on small business accounting and corporate compliance. However, we can assist business owners with their personal returns as part of a package."
  },
  {
    question: "What is your onboarding process?",
    answer: "We start with a discovery call to understand your needs. Then we perform a file review, propose a service plan, and once signed, we begin the setup and data integration phase."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-brand-gray">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-brand-navy mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-medium text-brand-navy hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <Minus size={20} className="text-brand-teal" /> : <Plus size={20} className="text-brand-teal" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};