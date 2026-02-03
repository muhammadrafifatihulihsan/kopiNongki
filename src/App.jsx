import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import About from './components/About';
import MenuPreview from './components/MenuPreview';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <About />
      <MenuPreview />
      <Gallery />
      <Membership />
      <Testimonials />
      <ContactCta />
      <Footer />
    </div>
  );
}

export default App;
