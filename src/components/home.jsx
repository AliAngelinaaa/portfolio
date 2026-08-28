import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../images/image.jpeg';
import "../style/home.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

const fadeUp = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const d = (base) => loading ? base : 0;

  const handleResumeDownload = () => {
    trackEvent('resume_download', { method: 'hero' });
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...fadeUp(d(0.2))}>
            <p className="section-subheading">Service Recovery Analyst @ Healthfirst</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-stone-900 dark:text-stone-50 leading-[1.1] mb-6">
              Hi, I'm{' '}
              <span className="italic text-rose-600 dark:text-rose-300">Nafisa</span>
            </h1>
            <p className="text-lg text-body leading-relaxed mb-4 max-w-lg">
              A passionate developer eager to make a meaningful impact — whether through
              <span className="font-semibold text-rose-600 dark:text-rose-300"> vlogging and video editing</span>,
              expressing creativity as a <span className="font-semibold dark:text-stone-100">writer</span>, or
              <span className="font-semibold text-rose-600 dark:text-rose-300"> helping others with genuine passion</span>.
            </p>
            <p className="text-body leading-relaxed mb-8 max-w-lg">
              I graduated Brooklyn College in three years, previously co-founded WIT Unite to empower CUNY students
              (2023–2025), and interned at The New York Times before joining Healthfirst in service recovery and
              incident management.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:nanzum1140@gmail.com" className="btn-primary">
                <FaEnvelope className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href={RESUME_URL}
                download="Nafisa_Anzum_Resume.pdf"
                onClick={handleResumeDownload}
                className="btn-outline"
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </a>
              <Link to="/experience" className="btn-outline">
                View Experience
              </Link>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/aliangelinaaa" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/80 dark:bg-stone-800 text-stone-600 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-300 hover:border-rose-200 dark:hover:border-rose-500 border border-rose-100 dark:border-stone-600 shadow-soft transition-all duration-300 hover:-translate-y-0.5"
                aria-label="GitHub">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/nafisaanzum" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/80 dark:bg-stone-800 text-stone-600 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-300 hover:border-rose-200 dark:hover:border-rose-500 border border-rose-100 dark:border-stone-600 shadow-soft transition-all duration-300 hover:-translate-y-0.5"
                aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', duration: 1, delay: d(0) }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-200 to-rose-100 dark:from-rose-900 dark:to-stone-900 rounded-3xl blur-2xl opacity-60" aria-hidden="true" />
              <img
                src={image}
                className="relative imageNafisa rounded-2xl shadow-card object-cover ring-4 ring-white/80 dark:ring-stone-800/80"
                alt="Nafisa Anzum"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
