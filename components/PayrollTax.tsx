import React from 'react';
import { Section } from './ui/Section';
import { Calendar, FileCheck, AlertCircle, Check } from 'lucide-react';

export const PayrollTax: React.FC = () => {
  return (
    <Section id="payroll">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Payroll */}
        <div className="lg:w-1/2">
          <div className="inline-block px-3 py-1 bg-brand-teal/10 text-brand-tealDark rounded-full text-sm font-semibold mb-4">Payroll Services</div>
          <h2 className="text-3xl font-bold text-brand-navy mb-6">Seamless Payroll Management</h2>
          <p className="text-gray-600 mb-8">
            Ensure your team gets paid on time, every time, while we handle the complex deductions and compliance requirements.
          </p>
          
          <div className="grid gap-4">
            {[
              "Direct Deposit Setup & Management",
              "Source Deductions Remittances",
              "ROE (Record of Employment) Filing",
              "Vacation Pay Tracking",
              "WSIB / EHT Compliance"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center p-4 bg-white rounded-lg shadow-sm border-l-4 border-brand-teal">
                <Check className="text-brand-teal mr-3" size={20} />
                <span className="font-medium text-brand-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tax Filing */}
        <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-brand-navy" size={28} />
            <h3 className="text-2xl font-bold text-brand-navy">Important Dates</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200">
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 bg-brand-navy text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                FEB
              </div>
              <h4 className="font-bold text-lg text-brand-navy">T4 & T5 Filing Deadline</h4>
              <p className="text-gray-500 text-sm">Last day of February. We prepare and file all slips electronically to the CRA.</p>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                JUN
              </div>
              <h4 className="font-bold text-lg text-brand-navy">T2 Corporate Return</h4>
              <p className="text-gray-500 text-sm">Usually 6 months after year-end. We coordinate with your CPA for final filing.</p>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                MTH
              </div>
              <h4 className="font-bold text-lg text-brand-navy">HST/GST Remittance</h4>
              <p className="text-gray-500 text-sm">Monthly, quarterly, or annually depending on your registration.</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-red-50 text-red-800 rounded-lg flex items-start gap-3">
            <AlertCircle size={20} className="mt-0.5 shrink-0" />
            <p className="text-sm"><strong>Avoid Penalties:</strong> Late filing can result in significant fines from the CRA. Let us keep you on track.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};