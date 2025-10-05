import React, { useState } from 'react';
import Loader from './components/layout/Loader';
import ReadingProgress from './components/layout/ReadingProgress';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import MetricsStrip from './components/sections/MetricsStrip';
import Competencies from './components/sections/Competencies';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#353B40] font-sans selection:bg-[#B39A73] selection:text-white relative">
      {!loadingFinished && (
        <Loader onFinished={() => setLoadingFinished(true)} />
      )}
      <ReadingProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <MetricsStrip />
        <Competencies />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
