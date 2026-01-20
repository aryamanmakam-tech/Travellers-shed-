
import React, { useState } from 'react';
import { TRIPS } from '../constants';
import { Trip } from '../types';

interface TripsProps {
  onNavigate: (page: string) => void;
  onSelectTrip: (trip: Trip) => void;
}

const Trips: React.FC<TripsProps> = ({ onNavigate, onSelectTrip }) => {
  const [filter, setFilter] = useState<'All' | 'Domestic' | 'International'>('All');
  const [durationFilter, setDurationFilter] = useState<'All' | 'Short' | 'Medium' | 'Long'>('All');

  const getDays = (durationStr: string) => {
    const match = durationStr.match(/(\d+)\s*Days/);
    return match ? parseInt(match[1]) : 0;
  };

  const filteredTrips = TRIPS.filter(trip => {
    const matchesType = filter === 'All' || trip.type === filter;
    
    const days = getDays(trip.duration);
    let matchesDuration = true;
    if (durationFilter === 'Short') matchesDuration = days <= 5;
    else if (durationFilter === 'Medium') matchesDuration = days >= 6 && days <= 7;
    else if (durationFilter === 'Long') matchesDuration = days >= 8;
    
    return matchesType && matchesDuration;
  });

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-serif mb-2">Our Curated Trips</h1>
          <p className="text-stone-500 font-light">Each trip is designed with flexibility and comfort in mind.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex bg-stone-100 p-1 rounded-sm">
            {['All', 'Domestic', 'International'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-all ${
                  filter === f ? 'bg-white shadow-sm text-stone-900 font-bold' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex bg-stone-100 p-1 rounded-sm">
            {['All', 'Short', 'Medium', 'Long'].map((d) => (
              <button
                key={d}
                onClick={() => setDurationFilter(d as any)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-all ${
                  durationFilter === d ? 'bg-white shadow-sm text-stone-900 font-bold' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                {d} {d !== 'All' ? 'Duration' : ''}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredTrips.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTrips.map(trip => (
            <div 
              key={trip.id} 
              className="group flex flex-col border border-stone-200 bg-white hover:border-stone-400 transition-all cursor-pointer"
              onClick={() => onSelectTrip(trip)}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={trip.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={trip.name} 
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-stone-900/80 backdrop-blur text-white text-[10px] uppercase tracking-widest px-3 py-1">
                    {trip.type}
                  </div>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="text-xs text-stone-400 uppercase tracking-widest mb-2 font-semibold">
                  {trip.duration}
                </div>
                <h3 className="text-2xl font-serif mb-4">{trip.name}</h3>
                <p className="text-stone-500 text-sm font-light mb-6 line-clamp-2">
                  {trip.description}
                </p>
                
                <div className="space-y-2 mb-8">
                  {trip.inclusions.slice(0, 3).map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-600 font-light">
                      <span className="text-premium-gold">•</span> {inc}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-stone-100">
                  <div>
                    <div className="text-[10px] uppercase tracking-tighter text-stone-400">Starting from</div>
                    <div className="text-xl font-serif text-stone-900 font-bold">₹{trip.price.toLocaleString()}</div>
                  </div>
                  <button 
                    className="bg-stone-900 text-white px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-premium-gold transition-colors font-bold"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-stone-200 bg-stone-50">
          <p className="text-stone-500 font-serif text-xl italic">No trips found matching your criteria.</p>
          <button 
            onClick={() => { setFilter('All'); setDurationFilter('All'); }}
            className="mt-6 text-xs uppercase tracking-widest border-b border-stone-900 font-bold"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Trips;
