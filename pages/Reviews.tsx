
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-serif mb-6">What Our Travellers Say</h1>
        <p className="text-stone-500 font-light max-w-2xl mx-auto">
          Real journeys. Real feedback. We are honored to have been a part of these unforgettable chapters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {REVIEWS.map((review) => (
          <div key={review.id} className="p-10 border border-stone-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 text-premium-gold mb-4">
              {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="text-lg font-serif italic mb-8 leading-relaxed text-stone-800">"{review.comment}"</p>
            <div className="flex justify-between items-end border-t border-stone-100 pt-6">
              <div>
                <div className="font-bold text-stone-900 uppercase tracking-widest text-xs">{review.name}</div>
                <div className="text-[10px] text-stone-400 uppercase tracking-tighter">Travelled to {review.trip}</div>
              </div>
              <div className="text-[10px] text-stone-300 font-bold uppercase tracking-[0.2em]">Verified Guest</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-stone-900 text-white p-20 text-center">
        <h2 className="text-3xl font-serif mb-8">Follow Our Journey on Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-stone-800 overflow-hidden group">
              <img 
                src={`https://picsum.photos/400/400?random=${i}`} 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all cursor-pointer" 
                alt="Social highlight"
              />
            </div>
          ))}
        </div>
        <button className="mt-12 text-sm uppercase tracking-widest border-b border-white pb-1 font-bold hover:text-premium-gold hover:border-premium-gold transition-colors">
          @thetravellershed
        </button>
      </div>
    </div>
  );
};

export default Reviews;
