
import React from 'react';
import { TRIPS } from '../constants';
import { Trip } from '../types';

interface HomeProps {
  onNavigate: (page: string) => void;
  onSelectTrip: (trip: Trip) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onSelectTrip }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-50"
            alt="Hero background"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Curated Journeys for the <br/>Modern Traveller
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 opacity-90 max-w-2xl mx-auto">
            Thoughtfully designed travel experiences that balance comfort, authenticity, and discovery. 
            From iconic destinations to hidden escapes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onNavigate('trips')}
              className="bg-white text-stone-900 px-10 py-4 font-semibold tracking-widest uppercase text-sm hover:bg-stone-200 transition-colors"
            >
              Explore Trips
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="border border-white text-white px-10 py-4 font-semibold tracking-widest uppercase text-sm hover:bg-white/10 transition-colors"
            >
              Customize Your Journey
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-light opacity-80 uppercase tracking-widest">
            <span>Handcrafted itineraries</span>
            <span>•</span>
            <span>Secure online booking</span>
            <span>•</span>
            <span>Dedicated concierge support</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm uppercase tracking-widest text-stone-500 mb-4 block font-semibold">Our Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-stone-900 leading-snug">
            At The Traveller’s Shed, we believe travel should feel effortless and personal.
          </h2>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            We design journeys that reflect your pace, preferences, and purpose—whether you’re seeking relaxation, adventure, romance, or exploration. 
            No mass tourism. No generic packages. Only journeys that feel truly yours.
          </p>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif mb-4">Featured Trips</h2>
            <p className="text-stone-500 uppercase tracking-widest text-sm font-semibold">Handpicked Experiences, Ready to Book</p>
          </div>
          <button 
            onClick={() => onNavigate('trips')}
            className="hidden md:block text-stone-900 font-semibold border-b border-stone-900 pb-1 text-sm uppercase tracking-widest hover:text-stone-500 hover:border-stone-500 transition-all"
          >
            View All Trips
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRIPS.slice(0, 4).map((trip) => (
            <div 
              key={trip.id} 
              className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100"
              onClick={() => onSelectTrip(trip)}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={trip.image} 
                  alt={trip.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                  {trip.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-stone-400 uppercase tracking-widest mb-2">{trip.duration}</div>
                <h3 className="text-xl font-serif mb-2 group-hover:text-stone-600 transition-colors">{trip.name}</h3>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-stone-50">
                  <span className="text-stone-400 text-xs">Starts from</span>
                  <span className="font-semibold text-stone-900">₹{trip.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Why The Traveller’s Shed</h2>
            <ul className="space-y-6">
              {[
                'Personalized travel planning tailored to your style',
                'Transparent pricing with no hidden charges',
                'Secure online payments & instant confirmation',
                'Trusted global partners and hand-verified stays',
                'End-to-end travel support from start to finish'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-stone-500 mt-1">✓</span>
                  <p className="text-lg font-light opacity-90">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-[500px] object-cover rounded-sm grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              alt="Travel vibes"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-serif mb-6">Travel, Refined.</h2>
          <p className="text-xl text-stone-500 mb-10 font-light">
            Start your journey with a team that values quality over quantity. 
            Every trip is a masterpiece in the making.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-stone-900 text-white px-12 py-5 font-semibold tracking-widest uppercase text-sm hover:bg-stone-800 transition-all shadow-lg"
          >
            Plan Your Trip
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
