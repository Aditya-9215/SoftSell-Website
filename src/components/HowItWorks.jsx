import React from 'react';

function HowItWorks() {
  return (
    <div className="container mx-auto text-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
      <div className="flex justify-center space-x-6">
        <div className="w-1/3 p-6 bg-pink-500 text-white rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105" data-aos="zoom-in">
          <h3 className="font-semibold text-2xl mb-4">Step 1</h3>
          <p>Sign up and create an account with us.</p>
        </div>
        <div className="w-1/3 p-6 bg-teal-500 text-white rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105" data-aos="zoom-in">
          <h3 className="font-semibold text-2xl mb-4">Step 2</h3>
          <p>Choose the best plan for your business.</p>
        </div>
        <div className="w-1/3 p-6 bg-yellow-500 text-white rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105" data-aos="zoom-in">
          <h3 className="font-semibold text-2xl mb-4">Step 3</h3>
          <p>Start using our platform and grow your business.</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
