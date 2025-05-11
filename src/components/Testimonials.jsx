import React from 'react';

function Testimonials() {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-indigo-600 mb-6">What Our Clients Say</h3>
      <div className="flex items-center space-x-6 mb-8">
        <img src="https://via.placeholder.com/80" alt="Client" className="w-16 h-16 rounded-full" />
        <div className="p-4 bg-pink-200 rounded-lg shadow-lg">
          <p className="text-lg">"This service has changed the way we do business. Highly recommend!"</p>
          <p className="text-gray-500">- John Doe, CEO of TechCorp</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <img src="https://via.placeholder.com/80" alt="Client" className="w-16 h-16 rounded-full" />
        <div className="p-4 bg-teal-200 rounded-lg shadow-lg">
          <p className="text-lg">"A game-changer for our company. Excellent customer support!"</p>
          <p className="text-gray-500">- Jane Smith, Founder of InnovateX</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
