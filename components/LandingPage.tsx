
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './sections/Hero';
import IdealForYou from './sections/IdealForYou';
import Benefits from './sections/Benefits';
import BeforeAfter from './sections/BeforeAfter';
import Testimonials from './sections/Testimonials';
import PackagesSection from './sections/PackagesSection';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import OrderModal from './OrderModal';

const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar onOrderClick={openModal} />
      
      <main>
        <div id="inicio">
          <Hero onOrderClick={openModal} />
        </div>
        
        <IdealForYou onOrderClick={openModal} />
        
        <div id="beneficios">
          <Benefits onOrderClick={openModal} />
        </div>
        
        <div id="antes-depois">
          <BeforeAfter />
        </div>
        
        <div id="depoimentos">
          <Testimonials />
        </div>
        
        <div id="pacotes">
          <PackagesSection onOrderClick={openModal} />
        </div>
        
        <div id="faq">
          <FAQ />
        </div>
      </main>
      
      <Footer />

      {mounted && isModalOpen && (
        <OrderModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default LandingPage;
