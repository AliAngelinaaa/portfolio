import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80,
    });
  };

  return (
    <footer className="mt-8 border-t border-rose-100/60 dark:border-stone-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-stone-800 dark:text-stone-50 mb-1">Nafisa Anzum</p>
            <p className="text-muted text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-1">
              {[
                { label: 'Home', section: 'home' },
                { label: 'Featured', section: 'featured' },
                { label: 'Projects', section: 'timeline' },
                { label: 'Skills', section: 'skills' },
              ].map(({ label, section }) => (
                <li key={section}>
                  <Link
                    to="/"
                    className="px-3 py-2 text-sm font-medium text-stone-600 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-300 rounded-lg hover:bg-rose-50 dark:hover:bg-stone-800 transition-colors"
                    onClick={() => scrollToSection(section)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/experience" className="px-3 py-2 text-sm font-medium text-stone-600 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-300 rounded-lg hover:bg-rose-50 dark:hover:bg-stone-800 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <a href="mailto:nanzum1140@gmail.com" className="px-3 py-2 text-sm font-medium text-stone-600 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-300 rounded-lg hover:bg-rose-50 dark:hover:bg-stone-800 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-3">
            <a href="https://github.com/aliangelinaaa" target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-full text-stone-500 dark:text-stone-300 hover:text-rose-600 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-stone-800 transition-all"
              aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/nafisaanzum/" target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-full text-stone-500 dark:text-stone-300 hover:text-rose-600 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-stone-800 transition-all"
              aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
