
import React, { useState, useEffect } from 'react';
import { Trip, CustomizationState } from '../types';
import { getTravelSuggestions, getSmartCustomizationTips } from '../services/geminiService';

interface CustomizeProps {
  trip: Trip;
  onNext: () => void;
}

const Customize: React.FC<CustomizeProps> = ({ trip, onNext }) => {
  const [options, setOptions] = useState<CustomizationState>({
    hotelUpgrade: false,
    privateExperience: false,
    adventureActivities: false,
    visaAssistance: false,
    flightInclusion: false,
    travellers: 2,
    startDate: '',
  });

  const [aiSuggestions, setAiSuggestions] = useState<any[]>([]);
  const [aiTips, setAiTips] = useState<string[]>([]);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    const fetchAiData = async () => {
      setLoadingAi(true);
      const suggestions = await getTravelSuggestions(trip.name, options.travellers, 'relaxation');
      const tips = await getSmartCustomizationTips(trip);
      setAiSuggestions(suggestions);
      setAiTips(tips);
      setLoadingAi(false);
    };
    fetchAiData();
  }, [trip]);

  const basePrice = trip.price;
  const upgradeCosts = {
    hotelUpgrade: 15000,
    privateExperience: 8000,
    adventureActivities: 12000,
    visaAssistance: 5000,
    flightInclusion: 45000,
  };

  const totalPrice = (
    basePrice +
    (options.hotelUpgrade ? upgradeCosts.hotelUpgrade : 0) +
    (options.privateExperience ? upgradeCosts.privateExperience : 0) +
    (options.adventureActivities ? upgradeCosts.adventureActivities : 0) +
    (options.visaAssistance ? upgradeCosts.visaAssistance : 0) +
    (options.flightInclusion ? upgradeCosts.flightInclusion : 0)
  ) * options.travellers;

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="lg:w-2/3">
        <h1 className="text-4xl font-serif mb-4">Design Your Perfect Journey</h1>
        <p className="text-stone-500 font-light mb-12">Every traveller is different. Customize your trip before booking.</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-6 border-b border-stone-200 pb-2">Experience Upgrades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'hotelUpgrade', label: 'Premium Hotel Upgrade', price: upgradeCosts.hotelUpgrade, desc: 'Upgrade to 5-star ocean-facing suites.' },
                { id: 'privateExperience', label: 'Private Guided Experiences', price: upgradeCosts.privateExperience, desc: 'A dedicated expert just for your group.' },
                { id: 'adventureActivities', label: 'Adventure Bundle', price: upgradeCosts.adventureActivities, desc: 'Includes scuba, paragliding, or mountain treks.' },
                { id: 'flightInclusion', label: 'Include International Flights', price: upgradeCosts.flightInclusion, desc: 'Seamless booking with premium carriers.' },
              ].map((opt) => (
                <div 
                  key={opt.id}
                  onClick={() => setOptions(prev => ({ ...prev, [opt.id]: !prev[opt.id as keyof CustomizationState] }))}
                  className={`p-6 border cursor-pointer transition-all ${
                    options[opt.id as keyof CustomizationState] ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900' : 'border-stone-200 bg-white hover:border-stone-400'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-stone-900">{opt.label}</h3>
                    <span className="text-sm font-bold text-stone-500">+₹{opt.price.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AI Suggestions Section */}
          <section className="bg-stone-50 p-8 border border-dashed border-stone-300">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-premium-gold animate-pulse"></span>
              <h2 className="text-sm font-bold uppercase tracking-widest text-stone-900">AI Concierge Recommendations</h2>
            </div>
            {loadingAi ? (
              <div className="space-y-4">
                <div className="h-4 bg-stone-200 animate-pulse w-3/4"></div>
                <div className="h-4 bg-stone-200 animate-pulse w-1/2"></div>
              </div>
            ) : (
              <div className="space-y-6">
                {aiSuggestions.map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-premium-gold text-lg">✦</div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">{s.title}</h4>
                      <p className="text-xs text-stone-600 font-light mt-1">{s.description}</p>
                      <div className="mt-2 inline-block px-2 py-1 bg-white border border-stone-100 text-[10px] text-stone-400 uppercase tracking-tighter italic">
                        Why premium: {s.premiumReason}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="text-[10px] font-bold uppercase text-stone-400 mb-4 tracking-widest">Seasonal Wisdom</h4>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aiTips.map((tip, i) => (
                  <li key={i} className="text-xs text-stone-500 bg-white p-3 rounded-sm italic">"{tip}"</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <div className="lg:w-1/3">
        <div className="sticky top-28 bg-stone-900 text-white p-10 shadow-2xl">
          <h2 className="text-2xl font-serif mb-8 border-b border-stone-700 pb-4">Booking Summary</h2>
          
          <div className="space-y-6 mb-10">
            <div className="flex justify-between text-sm opacity-60">
              <span>{trip.name} x {options.travellers}</span>
              <span>₹{(basePrice * options.travellers).toLocaleString()}</span>
            </div>
            
            {options.hotelUpgrade && (
              <div className="flex justify-between text-sm text-premium-gold">
                <span>Premium Hotel Upgrade</span>
                <span>+₹{(upgradeCosts.hotelUpgrade * options.travellers).toLocaleString()}</span>
              </div>
            )}
            {options.privateExperience && (
              <div className="flex justify-between text-sm text-premium-gold">
                <span>Private Experience</span>
                <span>+₹{(upgradeCosts.privateExperience * options.travellers).toLocaleString()}</span>
              </div>
            )}
            {options.adventureActivities && (
              <div className="flex justify-between text-sm text-premium-gold">
                <span>Adventure Bundle</span>
                <span>+₹{(upgradeCosts.adventureActivities * options.travellers).toLocaleString()}</span>
              </div>
            )}
            {options.flightInclusion && (
              <div className="flex justify-between text-sm text-premium-gold">
                <span>International Flights</span>
                <span>+₹{(upgradeCosts.flightInclusion * options.travellers).toLocaleString()}</span>
              </div>
            )}
          </div>

          <div className="border-t border-stone-700 pt-6 mb-10 flex justify-between items-end">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Total Amount</div>
              <div className="text-4xl font-serif font-bold">₹{totalPrice.toLocaleString()}</div>
            </div>
          </div>

          <button 
            onClick={onNext}
            className="w-full bg-white text-stone-900 py-5 font-bold uppercase tracking-widest text-sm hover:bg-premium-gold hover:text-white transition-all shadow-lg"
          >
            Confirm & Continue
          </button>
          
          <div className="mt-8 flex items-center justify-center gap-2 opacity-50 text-[10px] uppercase tracking-tighter">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Pricing updates in real time
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
