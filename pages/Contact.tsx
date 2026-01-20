
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-serif mb-8">Get in Touch</h1>
          <p className="text-stone-500 font-light text-lg leading-relaxed mb-12">
            Our travel experts are here to help you refine your journey. Whether you have a specific question 
            or need help starting from scratch, we typically respond within 24 hours.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-4">Direct Channels</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-stone-600">
                  <span className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">☏</span>
                  <span>+91 1234 567 890 (WhatsApp Support)</span>
                </div>
                <div className="flex items-center gap-4 text-stone-600">
                  <span className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">✉</span>
                  <span>concierge@thetravellershed.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-4">Our Base</h3>
              <p className="text-stone-500 font-light italic">The Shed, Studio 4A, Green Valley, Shimla, Himachal Pradesh</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-stone-200 p-10 shadow-sm">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
              <div className="w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center text-2xl">✓</div>
              <h2 className="text-3xl font-serif">Message Received</h2>
              <p className="text-stone-500 font-light">One of our curators will reach out to you shortly to discuss your perfect escape.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Your Name</label>
                <input required className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Email Address</label>
                <input required type="email" className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Interested Destination</label>
                <select className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900 bg-white">
                  <option>Bali</option>
                  <option>Kashmir</option>
                  <option>Himachal</option>
                  <option>Dubai</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Tell us about your trip</label>
                <textarea rows={4} className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900" placeholder="Preferred dates, budget, number of travellers, any special requests..."></textarea>
              </div>
              <button className="w-full bg-stone-900 text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-stone-800 transition-all">Send Inquiry</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
