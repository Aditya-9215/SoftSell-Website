import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll("section").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStartedClick = () => {
    const nextSection = document.getElementById("how-it-works");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsStarted(true);
    }, 500);
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <HeroSection onGetStartedClick={handleGetStartedClick} />

      {/* Ensuring Sections Push Footer Down */}
      <div className="flex-grow">
        {isStarted && (
          <>
            <section id="how-it-works">
              <HowItWorks />
            </section>
            <section id="why-choose-us">
              <WhyChooseUs />
            </section>
            <section id="pricing">
              <Pricing />
            </section>
            <section id="testimonials">
              <Testimonials />
            </section>
            <section id="cta-section">
              <CTA />
            </section>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;