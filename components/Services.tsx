import React from 'react';
import { Section } from './ui/Section';
import { BookOpen, Settings, GraduationCap, Users, FileText, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Bookkeeping",
    description: "Keep your finances organized and up-to-date.",
    points: ["Monthly reconciliation", "Expense tracking"],
    icon: BookOpen
  },
  {
    title: "QuickBooks Setup",
    description: "Start on the right foot with expert configuration.",
    points: ["Custom chart of accounts", "Data migration"],
    icon: Settings
  },
  {
    title: "QuickBooks Training",
    description: "Empower your team with tailored training sessions.",
    points: ["1-on-1 coaching", "Group workshops"],
    icon: GraduationCap
  },
  {
    title: "Payroll Services",
    description: "Timely and accurate payroll processing.",
    points: ["Direct deposit", "Source deductions"],
    icon: Users
  },
  {
    title: "T4 & T5 Filing",
    description: "Stress-free tax season preparation.",
    points: ["CRA compliance", "Year-end summaries"],
    icon: FileText
  },
  {
    title: "Advisory & Compliance",
    description: "Strategic advice to grow your business.",
    points: ["Financial reporting", "Audit support"],
    icon: ShieldCheck
  }
];

export const Services: React.FC = () => {
  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Core Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive financial solutions designed to provide clarity, ensure compliance, and drive growth for your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-t-4 border-transparent hover:border-brand-teal group cursor-pointer"
          >
            <div className="bg-brand-gray w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors text-brand-navy">
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
            <ul className="space-y-2 mb-6">
              {service.points.map((point, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mr-2" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex items-center text-brand-teal font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Learn More <ArrowRight size={16} className="ml-1" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};