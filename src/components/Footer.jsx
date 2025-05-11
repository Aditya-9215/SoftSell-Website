import React from "react";

const Footer = () => {
  return (
    <div className="text-center p-6">
      {/* Centered Back to Top Button ABOVE Footer */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => document.getElementById("hero-section").scrollIntoView({ behavior: "smooth" })}
          className="back-to-top"
        >
          Back to Top
        </button>
      </div>

      {/* Footer Content */}
      <footer>
        <p>&copy; 2025 SoftSell. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;