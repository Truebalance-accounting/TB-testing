import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Mail, Phone, MapPin, UploadCloud, Loader2 } from 'lucide-react';
import { submitContactForm } from '../services/api';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bookkeeping',
    message: '',
    agree: false
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value.toString()));
    if (file) data.append('file', file);

    try {
      await submitContactForm(data);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'Bookkeeping', message: '', agree: false });
      setFile(null);
    } catch (error) {
      setStatus('error');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Section id="contact" className="bg-brand-navy text-white" dark>
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Get Started</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Ready to bring clarity to your finances? Fill out the form or contact us directly. We respond within 24 business hours.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Phone className="text-brand-teal" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Call Us</h4>
                <p className="text-gray-300">+1 (555) 123-4567</p>
                <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 5pm EST</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Mail className="text-brand-teal" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email Us</h4>
                <p className="text-gray-300">hello@truebalance.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <MapPin className="text-brand-teal" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Visit Us</h4>
                <p className="text-gray-300">123 Financial District Blvd,<br/>Suite 400, Toronto, ON</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 text-brand-navy shadow-xl">
          {status === 'success' ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-20">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <UploadCloud size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-500">Thank you for reaching out. We will be in touch shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-brand-teal font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Phone *</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1">Email *</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Interested Service *</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                >
                  <option>Bookkeeping</option>
                  <option>QuickBooks Training</option>
                  <option>Payroll Services</option>
                  <option>Tax Filing</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Message</label>
                <textarea 
                  rows={3} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Upload Documents (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 transition-colors relative">
                  <UploadCloud className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">{file ? file.name : "Click to select a file"}</span>
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="agree"
                  required
                  checked={formData.agree}
                  onChange={e => setFormData({...formData, agree: e.target.checked})}
                  className="mt-1"
                />
                <label htmlFor="agree" className="text-xs text-gray-500">
                  I agree to the privacy policy. Your information is secure and will never be shared.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-3 bg-brand-teal text-white font-bold rounded-lg hover:bg-brand-tealDark transition-colors shadow-md disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {status === 'loading' ? <><Loader2 className="animate-spin" /> Sending...</> : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};