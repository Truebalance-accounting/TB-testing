import React from 'react';
import { ChevronRight, ShieldCheck, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 skew-x-12 translate-x-20 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-brand-navy">
              Financial Clarity for <br/>
              <span className="text-brand-teal">Business Growth</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              True Balance Accounting Services provides accurate bookkeeping, QuickBooks expertise, and reliable payroll and T4/T5 filing so you can focus on what you do best.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-brand-navy text-white rounded-md font-semibold hover:bg-brand-teal transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get Started <ChevronRight size={18} />
              </a>
              <a 
                href="#training" 
                className="px-8 py-3.5 bg-white text-brand-navy border border-brand-navy rounded-md font-semibold hover:bg-gray-50 transition-colors"
              >
                Book a Demo
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-teal" size={20} />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-brand-teal" size={20} />
                <span>Certified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-brand-teal" size={20} />
                <span>20+ Years Exp.</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/600/600?grayscale" 
                alt="Founder of True Balance" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-8 pt-24 text-white">
                <p className="font-serif text-xl italic">"We bring balance to your books so you can bring balance to your life."</p>
                <p className="mt-2 font-semibold text-brand-teal">— Sarah Jenkins, CPA, Founder</p>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-teal/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-navy/10 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};