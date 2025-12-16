import React, { useState } from 'react';
import { Section } from './ui/Section';
import { CheckCircle, FileDown, Play, ChevronDown, ChevronUp } from 'lucide-react';

export const QuickBooksFeature: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(0);

  const modules = [
    { title: "Module 1: Navigation & Setup", content: "Mastering the dashboard, setting up chart of accounts, and preferences." },
    { title: "Module 2: Recording Transactions", content: "Invoicing, expenses, bills, and bank deposits best practices." },
    { title: "Module 3: Reporting & Analysis", content: "Generating P&L, Balance Sheet, and customizing reports for insights." },
    { title: "Module 4: Payroll Integration", content: "Setting up employees, running payroll, and handling tax forms." },
  ];

  const pricing = [
    { name: "Basic", price: "$299", features: ["Online Course Access", "Email Support", "Completion Certificate"] },
    { name: "Professional", price: "$599", features: ["All Basic Features", "2 Hours 1-on-1 Coaching", "Custom Workflow Setup"], featured: true },
    { name: "Enterprise", price: "Custom", features: ["Team Training", "On-site Workshops", "Dedicated Account Manager"] },
  ];

  return (
    <Section id="training" className="bg-brand-navy text-white" dark>
      <div className="text-center mb-16">
        <span className="text-brand-teal font-semibold tracking-wider uppercase text-sm">Empower Your Team</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Master QuickBooks with Confidence</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Course Content */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Course Curriculum</h3>
          <div className="space-y-4">
            {modules.map((mod, index) => (
              <div key={index} className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                <button 
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-white/10 transition-colors"
                  onClick={() => setActiveModule(activeModule === index ? null : index)}
                >
                  <span className="font-semibold text-brand-teal">{mod.title}</span>
                  {activeModule === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeModule === index && (
                  <div className="p-4 pt-0 text-gray-300 text-sm leading-relaxed">
                    {mod.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-brand-teal/10 rounded-xl border border-brand-teal/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-teal rounded-full text-white">
                <FileDown size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Download Course Syllabus</h4>
                <p className="text-sm text-gray-300 mb-3">Get a detailed breakdown of every topic covered in our comprehensive training.</p>
                <button className="text-brand-teal hover:text-white font-semibold text-sm transition-colors">Download PDF &rarr;</button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Training Packages</h3>
          <div className="grid gap-6">
            {pricing.map((tier, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border ${tier.featured ? 'border-brand-teal bg-brand-teal/10 relative' : 'border-white/10 bg-white/5'}`}
              >
                {tier.featured && <span className="absolute -top-3 right-6 bg-brand-teal text-white text-xs px-2 py-1 rounded font-bold uppercase">Popular</span>}
                <div className="flex justify-between items-end mb-4">
                  <h4 className="font-bold text-xl">{tier.name}</h4>
                  <span className="text-2xl font-serif font-bold text-brand-teal">{tier.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <CheckCircle size={14} className="text-brand-teal mr-2" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-md font-semibold text-sm transition-colors ${tier.featured ? 'bg-brand-teal text-white hover:bg-brand-tealDark' : 'bg-white/10 hover:bg-white/20'}`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};