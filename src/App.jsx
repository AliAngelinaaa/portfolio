import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './components/nav';
import FeaturedProjects from './components/FeaturedProjects';
import Timeline from './components/timeline';
import Footer from './components/footer';
import Skills from './components/skills';
import Home from './components/home';
import Experience from './components/experience';
import { initEasterEgg, cleanupEasterEgg } from './utils/easterEgg';

function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none dark:opacity-40" aria-hidden="true">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="absolute top-0 -left-40 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
    </div>
  );
}

function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.pageYOffset > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          className="fixed bottom-6 right-6 z-40 bg-rose-600 text-white rounded-full shadow-card w-12 h-12 flex items-center justify-center hover:bg-rose-700"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    initEasterEgg();
    return () => cleanupEasterEgg();
  }, []);

  return (
    <Router basename="/portfolio/">
      <div className="relative min-h-screen">
        <BackgroundBlobs />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <FeaturedProjects />
                <Timeline />
                <Skills />
              </>
            } />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
