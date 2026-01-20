
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover brightness-50" alt="About" />
        <div className="relative z-10 text-white text-center">
          <h1 className="text-6xl font-serif mb-4">Our Story</h1>
          <p className="text-xl font-light uppercase tracking-widest opacity-80">Designing Experiences, Not Just Trips</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <p className="text-2xl font-serif italic text-stone-500 mb-12">"Travel should be about the depth of the experience, not the length of the itinerary."</p>
        <div className="space-y-8 text-lg text-stone-600 font-light leading-relaxed">
          <p>
            The Traveller’s Shed was created to offer meaningful, well-designed travel experiences in a world of mass-produced itineraries. 
            We recognized that modern travellers were tired of generic packages and chaotic sightseeing tours.
          </p>
          <p>
            What started as a passion for exploring the unknown has grown into a platform trusted by travellers who value comfort, authenticity, and attention to detail. 
            We spend months vetting our partners and hand-picking every stay, ensuring that your journey is nothing short of extraordinary.
          </p>
        </div>
      </section>

      <section className="bg-stone-100 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Handcrafted Itineraries', desc: 'No templates. Every journey is designed from scratch based on local secrets and expert knowledge.' },
            { title: 'No Mass Tourism', desc: 'We skip the tourist traps in favor of genuine cultural exchanges and secluded escapes.' },
            { title: 'Verified Stays', desc: 'Every hotel, villa, and resort is personally visited to ensure it meets our premium standards.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 border border-stone-200 text-center shadow-sm">
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
