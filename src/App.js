import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Services from './components/services/Services.jsx';
import Qualification from './components/qualification/Qualification.jsx';
import Work from './components/work/Work.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import ScrollUp from './components/scrollup/ScrollUp.jsx';

function App() {
  const [activeNav, setActiveNav] = useState('');
  useEffect(() => {
    const handleScroll = () => {
        const sections = ['home','about','skills','services','portfolio','contact'];
        let currentSection = '';

        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const bottom = rect.bottom + window.scrollY;
            if (window.scrollY >= top/1.2 && window.scrollY < bottom) {
              currentSection = section;
            }
          }
        });
        setActiveNav(currentSection);
    }

    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
    <Header activeNav={activeNav} />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  );
}

export default App;
