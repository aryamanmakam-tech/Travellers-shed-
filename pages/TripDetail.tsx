
import React, { useState } from 'react';
import { Trip } from '../types';

interface TripDetailProps {
  trip: Trip;
  onBook: () => void;
}

const TripDetail: React.FC<TripDetailProps> = ({ trip, onBook }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions'>('overview');

  return (
    <div className="animate-in fade-in duration-500">
      <div className="h-[60vh] relative">
        <img src={trip.image} className="w-full h-full object-cover brightness-75" alt={trip.name} />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
          <span className="text-sm uppercase tracking-[0.3em] font-light mb-4">{trip.destination}</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">{trip.name}</h1>
          <div className="flex gap-8 text-sm font-light uppercase tracking-widest bg-black/30 backdrop-blur-md px-8 py-3 rounded-full">
            <span>{trip.duration}</span>
            <span className="opacity-40">|</span>
            <span>{trip.category}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-2/3">
          {/* Tabs */}
          <div className="flex border-b border-stone-200 mb-10 overflow-x-auto">
            {['overview', 'itinerary', 'inclusions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab ? 'border-b-2 border-stone-900 text-stone-900' : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {activeTab === 'overview' && (
              <div className="animate-in fade-in slide-in-from-left-4">
                <h2 className="text-3xl font-serif mb-6">Trip Overview</h2>
                <p className="text-stone-600 leading-relaxed mb-10 text-lg font-light">{trip.description}</p>
                
                <h3 className="text-xl font-serif mb-6">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trip.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-4 bg-stone-100 p-4 border-l-4 border-stone-900">
                      <span className="text-stone-400 text-xs font-bold">0{i+1}</span>
                      <span className="text-stone-800 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-left-4">
                {trip.itinerary.map((day) => (
                  <div key={day.day} className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-2 border-stone-200 flex items-center justify-center text-sm font-bold group-hover:bg-stone-900 group-hover:text-white transition-colors">
                        {day.day}
                      </div>
                      <div className="w-px h-full bg-stone-200 mt-2"></div>
                    </div>
                    <div className="pb-12">
                      <h3 className="text-2xl font-serif mb-4">{day.title}</h3>
                      <p className="text-stone-600 mb-6 font-light">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.activities.map((act, i) => (
                          <span key={i} className="px-3 py-1 bg-stone-50 border border-stone-200 text-[10px] uppercase tracking-wider text-stone-500 rounded-sm">
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'inclusions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-left-4">
                <div>
                  <h3 className="text-xl font-serif mb-6 text-stone-900 border-b border-stone-100 pb-2">What’s Included</h3>
                  <ul className="space-y-4">
                    {trip.inclusions.map((inc, i) => (
                      <li key={i} className="flex gap-3 text-stone-600 font-light">
                        <span className="text-green-600">✓</span> {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-6 text-stone-900 border-b border-stone-100 pb-2">What’s Not Included</h3>
                  <ul className="space-y-4">
                    {trip.exclusions.map((exc, i) => (
                      <li key={i} className="flex gap-3 text-stone-400 font-light italic">
                        <span className="text-red-300">✕</span> {exc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Booking Panel */}
        <div className="lg:w-1/3">
          <div className="sticky top-28 bg-white border border-stone-200 p-8 shadow-xl">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Premium Journey</span>
                <h3 className="text-2xl font-serif">Reserve Experience</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-serif font-bold">₹{trip.price.toLocaleString()}</div>
                <div className="text-[10px] text-stone-400 uppercase">per person</div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Select Start Date</label>
                <input 
                  type="date" 
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Travellers</label>
                <select className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors">
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>)}
                </select>
              </div>
            </div>

            <button 
              onClick={onBook}
              className="w-full bg-stone-900 text-white py-5 font-bold uppercase tracking-widest text-sm hover:bg-stone-800 transition-all shadow-lg hover:shadow-stone-200"
            >
              Proceed to Booking
            </button>

            <p className="mt-6 text-[10px] text-center text-stone-400 font-light leading-relaxed">
              Price includes all taxes. Secure your dates with a minimal deposit. 
              Dedicated concierge support included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
