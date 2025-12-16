import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    quote: "True Balance transformed our chaotic books into a streamlined system. The monthly reports give us the clarity we needed to scale.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Owner",
    company: "Bloom Floral Design",
    quote: "Payroll used to be a nightmare. Now it takes zero time from my week. Highly recommend their professional and friendly team.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Founder",
    company: "Urban Cafe Group",
    quote: "The QuickBooks training was a game changer for my staff. They are now confident and efficient, saving us hours every week.",
    rating: 5,
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">What Our Clients Say</h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="overflow-hidden p-4">
          <div className="bg-brand-gray p-8 md:p-12 rounded-2xl relative text-center">
            <Quote className="absolute top-8 left-8 text-brand-teal/20 w-16 h-16 transform -scale-x-100" />
            
            <div className="relative z-10 transition-opacity duration-500 min-h-[200px] flex flex-col justify-center items-center">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif text-brand-navy italic mb-8">
                "{testimonials[current].quote}"
              </p>
              <div>
                <h4 className="font-bold text-brand-navy">{testimonials[current].name}</h4>
                <p className="text-gray-500 text-sm">{testimonials[current].role}, {testimonials[current].company}</p>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={prev}
          className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-2 bg-white shadow-md rounded-full text-brand-navy hover:text-brand-teal transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-2 bg-white shadow-md rounded-full text-brand-navy hover:text-brand-teal transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${current === idx ? 'bg-brand-teal w-6' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};