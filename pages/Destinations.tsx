
import React from 'react';
import { DESTINATIONS } from '../constants';

const Destinations: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const domestic = DESTINATIONS.filter(d => d.type === 'Domestic');
  const international = DESTINATIONS.filter(d => d.type === 'International');

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-serif mb-6">Explore Destinations</h1>
        <p className="text-stone-500 leading-relaxed font-light">
          Browse destinations across India and beyond. Each destination offers multiple curated experiences, 
          customizable to your preferences. Select one to view available trips.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-serif mb-8 flex items-center gap-4">
          Domestic Escapes
          <span className="h-px bg-stone-200 flex-grow"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domestic.map(dest => (
            <DestinationCard key={dest.id} destination={dest} onNavigate={() => onNavigate('trips')} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-serif mb-8 flex items-center gap-4">
          International Getaways
          <span className="h-px bg-stone-200 flex-grow"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {international.map(dest => (
            <DestinationCard key={dest.id} destination={dest} onNavigate={() => onNavigate('trips')} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DestinationCard: React.FC<{ destination: any, onNavigate: () => void }> = ({ destination, onNavigate }) => (
  <div 
    className="group relative h-80 overflow-hidden cursor-pointer"
    onClick={onNavigate}
  >
    <img 
      src={destination.image} 
      alt={destination.name} 
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
      <h3 className="text-3xl font-serif mb-2">{destination.name}</h3>
      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity font-light duration-300 translate-y-2 group-hover:translate-y-0 transform">
        {destination.description}
      </p>
    </div>
  </div>
);

export default Destinations;
