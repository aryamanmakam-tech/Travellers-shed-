
import React from 'react';

const Footer: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif text-white mb-6">THE TRAVELLER’S SHED</h2>
          <p className="max-w-md mb-8">
            Premium travel experiences thoughtfully designed for the modern explorer. 
            We value quality over quantity and comfort over convention.
          </p>
          <div className="flex space-x-4">
            {/* Social icons placeholder */}
            <div className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center hover:border-white transition-colors cursor-pointer">IG</div>
            <div className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center hover:border-white transition-colors cursor-pointer">FB</div>
            <div className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center hover:border-white transition-colors cursor-pointer">LI</div>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => onNavigate('destinations')} className="hover:text-white">Explore Destinations</button></li>
            <li><button onClick={() => onNavigate('trips')} className="hover:text-white">Browse All Trips</button></li>
            <li><button onClick={() => onNavigate('customize')} className="hover:text-white">Customize Your Journey</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-white">Our Story</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h3>
          <ul className="space-y-4 text-sm">
            <li><button className="hover:text-white">Terms & Conditions</button></li>
            <li><button className="hover:text-white">Privacy Policy</button></li>
            <li><button className="hover:text-white">Cancellation Policy</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-white">Support</button></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2024 The Traveller's Shed. All rights reserved.</p>
        <p>Premium Travel Refined.</p>
      </div>
    </footer>
  );
};

export default Footer;
