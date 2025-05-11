import React from "react";

export default function CTA() {
  return (
    <section className="bg-indigo-600 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to supercharge your sales?</h2>
        <p className="mb-6 text-lg">
          Sign up for a free consultation and discover how SoftSell can help your business grow.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
          Get Started Now
        </button>
      </div>
    </section>
  );
}
