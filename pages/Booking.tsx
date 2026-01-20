
import React, { useState } from 'react';
import { Trip } from '../types';

interface BookingProps {
  trip: Trip;
  onComplete: () => void;
}

const Booking: React.FC<BookingProps> = ({ trip, onComplete }) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = () => {
    if (step === 3) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        onComplete();
      }, 2000);
    } else {
      setStep(prev => prev + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <div className="flex justify-between items-center mb-16 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-stone-200 -z-10"></div>
        {[1, 2, 3].map((s) => (
          <div 
            key={s}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              step >= s ? 'bg-stone-900 text-white' : 'bg-stone-200 text-stone-500'
            } ${step === s ? 'ring-4 ring-stone-100' : ''}`}
          >
            {s}
          </div>
        ))}
      </div>

      <div className="bg-white border border-stone-200 p-10 shadow-sm">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h2 className="text-2xl font-serif mb-8">Traveller Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Full Name</label>
                <input className="w-full border border-stone-200 px-4 py-3 text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Email Address</label>
                <input className="w-full border border-stone-200 px-4 py-3 text-sm" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Phone Number</label>
                <input className="w-full border border-stone-200 px-4 py-3 text-sm" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Passport / ID (Optional)</label>
                <input className="w-full border border-stone-200 px-4 py-3 text-sm" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h2 className="text-2xl font-serif mb-8">Review Itinerary</h2>
            <div className="bg-stone-50 p-6 rounded-sm space-y-4">
              <div className="flex justify-between">
                <span className="text-stone-500 font-light">Journey</span>
                <span className="font-bold">{trip.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500 font-light">Dates</span>
                <span className="font-bold">May 12 - May 18, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500 font-light">Guests</span>
                <span className="font-bold">2 Adults</span>
              </div>
              <div className="border-t border-stone-200 pt-4 flex justify-between text-xl font-serif">
                <span>Amount to Pay</span>
                <span className="font-bold">₹{(trip.price * 2).toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h2 className="text-2xl font-serif mb-8">Secure Payment</h2>
            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <button className="border border-stone-200 p-6 text-left flex justify-between items-center hover:border-stone-900 transition-colors">
                  <span className="font-bold tracking-widest uppercase text-xs">UPI (Google Pay / PhonePe)</span>
                  <span className="text-stone-300">→</span>
                </button>
                <button className="border border-stone-200 p-6 text-left flex justify-between items-center hover:border-stone-900 transition-colors">
                  <span className="font-bold tracking-widest uppercase text-xs">Credit / Debit Cards</span>
                  <span className="text-stone-300">→</span>
                </button>
                <button className="border border-stone-200 p-6 text-left flex justify-between items-center hover:border-stone-900 transition-colors">
                  <span className="font-bold tracking-widest uppercase text-xs">EMI (if applicable)</span>
                  <span className="text-stone-300">→</span>
                </button>
              </div>
              <p className="text-[10px] text-stone-400 text-center uppercase tracking-widest">All payments are encrypted and secure.</p>
            </div>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-stone-100 flex justify-end">
          <button
            onClick={handleNext}
            disabled={isProcessing}
            className={`bg-stone-900 text-white px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-stone-800 transition-all ${
              isProcessing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isProcessing ? 'Processing...' : step === 3 ? 'Pay Now' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
