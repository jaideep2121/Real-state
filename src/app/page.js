'use client'

import Image from "next/image";
import Nav from "./components/Nav";
import Tab from "./components/Tab";
import { useState } from "react";
import { Modal } from "./components/Modal";
import Amenties from "./components/Amenties";
import Feature from "./components/Feature";
import LocationAdvantage from "./components/LocationAdvantage";
import Footer from "./components/Footer";
import Other from "./components/Other";
import Chatbot from "./components/Chatbot";

export default function Home() {



  return (
   <div>
   <Chatbot/>
  <div className="relative w-full h-screen bg-cover bg-center" style={{backgroundImage:"url('https://media.istockphoto.com/id/184962061/photo/business-towers.jpg?s=612x612&w=0&k=20&c=gLQLQ9lnfW6OnJVe39r516vbZYupOoEPl7P_22Un6EM=')" }}>
  <Nav />
  <Tab />

  </div>
  <div>
    <Feature/>
  </div>
  <div >
<Amenties/>
  </div>

  <div>
    <LocationAdvantage/>
  </div>
  <div>
    <Other/>
  </div>
  <div>
    <Footer/>
  </div>
   </div>
  );
}
