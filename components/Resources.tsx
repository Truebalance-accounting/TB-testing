import React from 'react';
import { Section } from './ui/Section';
import { FileText, Download } from 'lucide-react';
import { ResourceItem } from '../types';

const resources: ResourceItem[] = [
  {
    title: "New Client Checklist",
    description: "Everything you need to gather for your first meeting.",
    type: "pdf",
    downloadUrl: "#"
  },
  {
    title: "2024 Tax Timeline",
    description: "Key dates for payroll, HST, and corporate filing.",
    type: "pdf",
    downloadUrl: "#"
  },
  {
    title: "Expense Guide",
    description: "What is deductible? A quick reference for business owners.",
    type: "pdf",
    downloadUrl: "#"
  }
];

export const Resources: React.FC = () => {
  return (
    <Section id="resources">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-brand-navy mb-2">Resources Center</h2>
          <p className="text-gray-600">Helpful guides and tools for your business journey.</p>
        </div>
        <a href="#" className="hidden md:block text-brand-teal font-semibold hover:underline mt-4 md:mt-0">
          View all resources &rarr;
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {resources.map((res, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-4">
              <FileText size={24} />
            </div>
            <h3 className="font-bold text-brand-navy mb-2">{res.title}</h3>
            <p className="text-sm text-gray-500 mb-6 h-10">{res.description}</p>
            <button className="w-full py-2 border border-brand-teal text-brand-teal rounded-md text-sm font-semibold hover:bg-brand-teal hover:text-white transition-colors flex justify-center items-center gap-2">
              <Download size={16} /> Download
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
};