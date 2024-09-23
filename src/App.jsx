import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import Nav from './components/nav';
import Timeline from './components/timeline';
import Footer from './components/footer';
import Skills from './components/skills';
import Home from './components/home';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Router basename="/portfolio/">
      <div>
        <Nav />
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Timeline />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Footer />
        </div>
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
      </div>
    </Router>
  );
}

export default App;
