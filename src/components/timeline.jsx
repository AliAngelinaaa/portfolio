import { useState, useEffect, useMemo } from 'react';
import timelineData, { PROJECT_CATEGORIES } from './timelineData.js';
import { motion } from 'framer-motion';

function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const filteredData = useMemo(() => {
    if (activeFilter === 'all') return timelineData;
    return timelineData.filter(item => item.categories?.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const active = filteredData[activeIndex] ?? filteredData[0];

  return (
    <section id="timeline" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="section-subheading">Portfolio</p>
          <h2 className="section-heading">All Projects</h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            A journey through games, web apps, and hackathon projects — from high school to today.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PROJECT_CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                activeFilter === id
                  ? 'bg-rose-600 text-white shadow-soft'
                  : 'bg-white/80 dark:bg-stone-800 text-stone-600 dark:text-stone-200 border border-rose-100 dark:border-stone-600 hover:border-rose-200 dark:hover:border-stone-500'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {filteredData.length === 0 ? (
          <p className="text-center text-muted">No projects in this category.</p>
        ) : isLargeScreen ? (
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-2 max-h-[70vh] overflow-y-auto pr-2">
              {filteredData.map((data, index) => (
                <button
                  key={data.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                    activeIndex === index
                      ? 'bg-white dark:bg-stone-800 shadow-card border-rose-200 dark:border-rose-700 scale-[1.02]'
                      : 'bg-white/50 dark:bg-stone-800/70 border-transparent hover:bg-white/80 dark:hover:bg-stone-800 hover:border-rose-100 dark:hover:border-stone-600'
                  }`}
                >
                  <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1">{data.date}</p>
                  <h3 className="font-semibold text-stone-800 dark:text-stone-50 text-lg">{data.title}</h3>
                </button>
              ))}
            </div>

            {active && (
              <motion.div
                key={active.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-3 card p-8 lg:sticky lg:top-28 lg:self-start"
              >
                <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-2">{active.date}</p>
                <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-50 mb-4">{active.title}</h3>
                <div
                  className="project-prose prose prose-stone dark:prose-invert prose-sm max-w-none leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: active.description }}
                />
                {active.link && (
                  <a
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 text-sm"
                  >
                    {active.linkLabel || 'View Project'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0113.25 16.5h-8.5A2.25 2.25 0 012.5 14.25v-8.5A2.25 2.25 0 014.75 3.75h4a.75.75 0 010 1.5h-4z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.31v2.409a.75.75 0 001.5 0V2.75a.75.75 0 00-.75-.75h-3.969a.75.75 0 000 1.5h2.392L6.247 13.753a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </motion.div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredData.map((data, index) => (
              <div key={data.title} className="card overflow-hidden">
                <button
                  className="w-full p-5 flex justify-between items-center text-left"
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                >
                  <div>
                    <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider">{data.date}</p>
                    <h3 className="font-semibold text-stone-800 dark:text-stone-50 text-lg mt-1">{data.title}</h3>
                  </div>
                  <span className="text-rose-400 text-2xl font-light ml-4 shrink-0">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-5 pb-5 border-t border-rose-100/60 dark:border-stone-700/60"
                  >
                    <div
                      className="pt-4 project-prose prose prose-stone dark:prose-invert prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                    {data.link && (
                      <a href={data.link} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 text-sm">
                        {data.linkLabel || 'View Project'}
                      </a>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Timeline;
