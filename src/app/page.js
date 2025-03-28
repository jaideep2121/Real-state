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
import Pricing from './components/Pricing';
import ClubhouseInfo from './components/Clubhouse';
import MarriottResidences from './components/Marriot';
import DesignInfo from './components/Add';


export default function Home() {
  const homeRef = useRef(null);
  const featureRef = useRef(null);
  const amenitiesRef = useRef(null);
  const locationRef = useRef(null);
  const priceref=useRef(null);
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
            "url(https://www.hotelierindia.com/cloud/2023/09/08/QW0NowKb-BOMEM_Facade_01-1200x723.jpg)",
        }}
      >
        <Nav
          onScroll={(section) => {
            if (section === 'Home') handleScroll(homeRef);
            if (section === 'Why WESTIN Residence') handleScroll(featureRef);
            if (section === 'Amenities') handleScroll(amenitiesRef);
            if (section === 'Location') handleScroll(locationRef);
            if (section === 'Other Projects') handleScroll(otherRef);
            if(section==='Pricing') handleScroll(priceref);
          }}
        />
        <Tab />
      </div>

      <div ref={featureRef}>
        <Feature />
      </div>
      <div ref={priceref}>
        <Pricing/>
      </div>
     
      <div>
        <MarriottResidences></MarriottResidences>
      </div>
      <div>
        <DesignInfo></DesignInfo>
      </div>

      <div ref={amenitiesRef}>
        <Amenties />
      </div>
      {/* <div>
        <ClubhouseInfo></ClubhouseInfo>
      </div> */}

      <div ref={locationRef}>
        <LocationAdvantage />
      </div>

      

      <Footer  onScroll={(section) => {
            if (section === 'Home') handleScroll(homeRef);
            if (section === 'Why WESTIN Residence') handleScroll(featureRef);
            if (section === 'Amenities') handleScroll(amenitiesRef);
            if (section === 'Location') handleScroll(locationRef);
            if (section === 'Other Projects') handleScroll(otherRef);
            if(section==='Pricing') handleScroll(priceref);
          }} />
    </div>
  );
}
