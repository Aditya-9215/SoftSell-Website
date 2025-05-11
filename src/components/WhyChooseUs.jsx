import React from 'react';
import { ShieldCheck, Clock, Smile } from 'lucide-react';

function WhyChooseUs() {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold text-white mb-6">Why Choose Us?</h2>
      <div className="flex justify-between">
        <div className="w-1/3 bg-pink-600 p-6 rounded-lg shadow-xl text-white hover:shadow-2xl transition-transform transform hover:scale-105" data-aos="zoom-in">
          <ShieldCheck className="mx-auto text-white w-16 h-16 mb-4" />
          <h3 className="font-bold text-xl mb-2">Security</h3>
          <p>Our platform offers top-notch security features to keep your data safe.</p>
        </div>
        <div className="w-1/3 bg-teal-600 p-6 rounded-lg shadow-xl text-white hover:shadow-2xl transition-transform transform hover:scale-105" data-aos="zoom-in">
          <Clock className="mx-auto text-white w-16 h-16 mb-4" />
          <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
          <p>We are always here to help you, no matter the time of day.</p>
        </div>
        <div className="w-1/3 bg-yellow-500 p-6 rounded-lg shadow-xl text-white hover:shadow-2xl transition-transform transform hover:scale-105" data-aos="zoom-in">
          <Smile className="mx-auto text-white w-16 h-16 mb-4" />
          <h3 className="font-bold text-xl mb-2">Customer Satisfaction</h3>
          <p>Our goal is to provide a smooth and enjoyable experience for our users.</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
