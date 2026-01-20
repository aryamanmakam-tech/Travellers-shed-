
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h1 className="text-5xl font-serif mb-2">My Account</h1>
          <p className="text-stone-500 font-light">Manage your journey effortlessly.</p>
        </div>
        <div className="bg-stone-100 px-6 py-4 rounded-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold">JD</div>
          <div>
            <div className="text-sm font-bold">John Doe</div>
            <div className="text-xs text-stone-500">Premium Member</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-serif border-b border-stone-200 pb-4">Upcoming Trips</h2>
          
          <div className="bg-white border border-stone-200 overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600" className="h-full object-cover" />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-green-600">Confirmed</span>
                    <h3 className="text-2xl font-serif">Bali Luxe Escape</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-stone-400">Order ID</div>
                    <div className="text-sm font-bold">#TS-99812</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-[10px] uppercase text-stone-400 font-bold mb-1">Dates</div>
                    <div className="text-sm">May 12 - May 18, 2024</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-stone-400 font-bold mb-1">Guests</div>
                    <div className="text-sm">2 Adults</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-stone-900 text-white px-6 py-3 text-[10px] uppercase font-bold tracking-widest hover:bg-stone-800 transition-colors">Download Itinerary (PDF)</button>
                  <button className="border border-stone-200 px-6 py-3 text-[10px] uppercase font-bold tracking-widest hover:bg-stone-50 transition-colors">Request Modification</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-serif border-b border-stone-200 pb-4">Recent Receipts</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-4 bg-stone-50 border border-stone-100 flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold">Bali Escape Deposit</div>
                  <div className="text-xs text-stone-400">April 05, 2024</div>
                </div>
                <button className="text-[10px] uppercase font-bold text-stone-900 border-b border-stone-900">View</button>
              </div>
            ))}
          </div>

          <div className="bg-stone-900 text-white p-8">
            <h3 className="text-lg font-serif mb-4">Need Help?</h3>
            <p className="text-sm font-light opacity-70 mb-6 leading-relaxed">Your dedicated concierge is available 24/7 for any modifications or support during your journey.</p>
            <button className="w-full bg-white text-stone-900 py-3 text-[10px] uppercase font-bold tracking-widest">Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
