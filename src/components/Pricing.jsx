import React from 'react';

function Pricing() {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold text-white mb-6">Our Pricing</h2>
      <div className="flex justify-center space-x-6">
        <div className="bg-pink-500 p-6 rounded-lg shadow-xl text-white hover:shadow-2xl transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
          <p className="text-lg font-bold">$19/month</p>
          <p>Basic features for small businesses.</p>
        </div>
        <div className="bg-teal-500 p-6 rounded-lg shadow-xl text-white hover:shadow-2xl transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
          <p className="text-lg font-bold">$49/month</p>
          <p>Advanced features for growing businesses.</p>
        </div>
        <div className="bg-yellow-500 p-6 rounded-lg shadow-xl text-white hover:shadow-2xl transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
          <p className="text-lg font-bold">$99/month</p>
          <p>All features for large-scale enterprises.</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
