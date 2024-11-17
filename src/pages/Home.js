// pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import MembershipPlans from '../components/MembershipPlans';
import Facilities from '../components/Facilities';
import AboutUs from '../components/AboutUs';
import RulesAndTiming from '../components/RulesAndTiming';
import Gallery from '../components/Gallery';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
    <div className="home-page">
      <Navbar />         {/* Add Navbar at the top */}
      <HeroSection />
      <MembershipPlans />
      <Facilities />
      <AboutUs />
      <RulesAndTiming />
      <Gallery />
      <ContactUs />
      <Footer />         {/* Add Footer at the bottom */}
    </div>
  );
}

export default Home;
