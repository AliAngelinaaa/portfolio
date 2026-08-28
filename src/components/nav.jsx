import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { trackEvent } from '../utils/analytics';

const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [showCat, setShowCat] = useState(false);
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
  const [catMood, setCatMood] = useState('😺');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80,
    });

    if (section === 'home') {
      setClickCount(prev => {
        const newCount = prev + 1;
        if (newCount === 5) {
          setShowCat(true);
          setCatPosition({
            x: Math.random() * (window.innerWidth - 60),
            y: Math.random() * (window.innerHeight - 60),
          });
        }
        return newCount;
      });
    } else {
      setClickCount(0);
    }
    setMobileOpen(false);
  };

  const handleResumeDownload = () => {
    trackEvent('resume_download', { method: 'nav' });
  };

  const petCat = () => {
    setCatMood('😻');
    setTimeout(() => setCatMood('😺'), 1000);
  };

  const moveCat = () => {
    setCatPosition({
      x: Math.random() * (window.innerWidth - 60),
      y: Math.random() * (window.innerHeight - 60),
    });
    setCatMood('🙀');
    setTimeout(() => setCatMood('😺'), 500);
  };

  const rickRoll = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  const navLinks = [
    { label: 'Home', section: 'home' },
    { label: 'Featured', section: 'featured' },
    { label: 'Projects', section: 'timeline' },
    { label: 'Skills', section: 'skills' },
  ];

  return (
    <>
      <AnimatePresence>
        {showCat && (
          <motion.div
            className="fixed text-4xl cursor-pointer z-50 select-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, x: catPosition.x, y: catPosition.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={petCat}
            onDoubleClick={moveCat}
          >
            {catMood}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-soft border-b border-rose-100/60 dark:border-stone-800/60' : 'bg-transparent'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: loading ? 0.5 : 0 }}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            <div className="flex items-center gap-1">
              <span className="font-serif text-2xl italic text-stone-800 dark:text-stone-50">Nafisa</span>
              <button
                onClick={rickRoll}
                className="font-serif text-2xl text-stone-800 dark:text-stone-50 hover:text-rose-600 dark:hover:text-rose-300 transition-colors cursor-pointer"
              >
                Anzum
              </button>
            </div>

            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, section }) => (
                <li key={section}>
                  <Link
                    to="/"
                    className="px-3 py-2 text-sm font-semibold text-stone-600 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-300 rounded-full hover:bg-rose-50 dark:hover:bg-stone-800 transition-all duration-200"
                    onClick={() => scrollToSection(section)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={RESUME_URL}
                  download="Nafisa_Anzum_Resume.pdf"
                  onClick={handleResumeDownload}
                  className="px-3 py-2 text-sm font-semibold text-stone-600 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-300 rounded-full hover:bg-rose-50 dark:hover:bg-stone-800 transition-all duration-200 inline-flex items-center gap-1.5"
                >
                  <FaDownload className="w-3.5 h-3.5" />
                  Resume
                </a>
              </li>
              <li>
                <Link to="/experience" className="ml-1 btn-primary text-sm py-2 px-4">
                  Experience
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="ml-1 p-2.5 rounded-full text-stone-600 dark:text-stone-200 hover:bg-rose-50 dark:hover:bg-stone-800 transition-colors"
                  aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                >
                  {theme === 'light' ? <FaMoon className="w-4 h-4" /> : <FaSun className="w-4 h-4" />}
                </button>
              </li>
            </ul>

            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-stone-600 dark:text-stone-200 hover:bg-rose-50 dark:hover:bg-stone-800 transition-colors"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
              </button>
              <button
                className="p-2 rounded-lg text-stone-600 dark:text-stone-200 hover:bg-rose-50 dark:hover:bg-stone-800 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden border-t border-rose-100/60 dark:border-stone-800/60"
              >
                <ul className="py-3 space-y-1">
                  {navLinks.map(({ label, section }) => (
                    <li key={section}>
                      <Link
                        to="/"
                        className="block px-4 py-3 text-sm font-semibold text-stone-600 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-stone-800 rounded-xl transition-colors"
                        onClick={() => scrollToSection(section)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href={RESUME_URL}
                      download="Nafisa_Anzum_Resume.pdf"
                      onClick={handleResumeDownload}
                      className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-stone-600 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-stone-800 rounded-xl transition-colors"
                    >
                      <FaDownload className="w-4 h-4" />
                      Download Resume
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/experience"
                      className="block mx-4 my-2 btn-primary text-sm text-center justify-center"
                    >
                      Experience
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}

export default Nav;
