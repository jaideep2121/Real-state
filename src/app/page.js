'use client';

import { useRef } from 'react';
import Nav from './components/Nav';
import Tab from './components/Tab';
import Amenties from './components/Amenties';
import Feature from './components/Feature';
import LocationAdvantage from './components/LocationAdvantage';
import Footer from './components/Footer';
import Other from './components/Other';
import Chatbot from './components/Chatbot';

export default function Home() {
  const homeRef = useRef(null);
  const featureRef = useRef(null);
  const amenitiesRef = useRef(null);
  const locationRef = useRef(null);
  const otherRef = useRef(null);

  const handleScroll = (section) => {
    section?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Chatbot />
      <div
        ref={homeRef}
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/184962061/photo/business-towers.jpg?s=612x612&w=0&k=20&c=gLQLQ9lnfW6OnJVe39r516vbZYupOoEPl7P_22Un6EM=')",
        }}
      >
        <Nav
          onScroll={(section) => {
            if (section === 'Home') handleScroll(homeRef);
            if (section === 'Why Choose us') handleScroll(featureRef);
            if (section === 'Amenities') handleScroll(amenitiesRef);
            if (section === 'Location') handleScroll(locationRef);
            if (section === 'Other Projects') handleScroll(otherRef);
          }}
        />
        <Tab />
      </div>

      <div ref={featureRef}>
        <Feature />
      </div>

      <div ref={amenitiesRef}>
        <Amenties />
      </div>

      <div ref={locationRef}>
        <LocationAdvantage />
      </div>

      <div ref={otherRef}>
        <Other />
      </div>

      <Footer />
    </div>
  );
}
