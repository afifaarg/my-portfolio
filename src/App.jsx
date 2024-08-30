import React, { useState } from 'react';
import HelloSection from './components/HelloSection';
import ContactSideBar from './components/ContactSideBar';
import AboutMe from './components/AboutMe';
import EmailSideBar from './components/EmailSideBar';
import Entryanimation from './components/EntryAnimation';
import Navbar from './components/NavBar';
import './App.css'; // Tailwind CSS should be imported in index.css or App.css

const App = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  return (
    <div className='relative'>
      {!showHomePage ? (
        <Entryanimation onAnimationEnd={() => setShowHomePage(true)} />
      ) : (
        <>
          <Navbar />
          <div className='absolute'>
            <ContactSideBar />
          </div>
          <HelloSection />
          <AboutMe />
          <div className='absolute'>
            <EmailSideBar />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
