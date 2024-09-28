import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import Nav from './components/nav';
import Timeline from './components/timeline';
import Footer from './components/footer';
import Skills from './components/skills';
import Home from './components/home';
import Experience from './components/experience';

function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          className="fixed bottom-5 right-5 bg-rose-500 text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router basename="/portfolio/">
      <div>
        <Nav id="navbar" />
        <Routes>
          <Route path="/" element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="projects">
                <Timeline />
              </div>
              <div id="skills">
                <Skills />
              </div>
            </>
          } />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
