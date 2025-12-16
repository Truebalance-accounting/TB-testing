import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Calculator } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-teal p-1.5 rounded-md text-white">
                <Calculator size={20} />
              </div>
              <span className="text-xl font-serif font-bold">True Balance</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering businesses with financial clarity and strategic growth support since 2003.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-brand-teal transition-colors">Services</a></li>
              <li><a href="#training" className="hover:text-brand-teal transition-colors">QuickBooks Training</a></li>
              <li><a href="#payroll" className="hover:text-brand-teal transition-colors">Payroll & Tax</a></li>
              <li><a href="#about" className="hover:text-brand-teal transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-teal transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Financial District Blvd</li>
              <li>Toronto, ON M5J 2H2</li>
              <li className="pt-2"><a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a></li>
              <li><a href="mailto:hello@truebalance.com" className="hover:text-white">hello@truebalance.com</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for tax tips and updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:border-brand-teal"
              />
              <button className="bg-brand-teal px-4 py-2 rounded-md font-bold text-sm hover:bg-brand-tealDark transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} True Balance Accounting Services. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};