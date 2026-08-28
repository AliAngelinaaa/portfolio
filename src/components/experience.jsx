import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import exData from './exData';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

function Experience() {
  const [easterEgg, setEasterEgg] = useState(false);
  const [easterEggType, setEasterEggType] = useState('');
  const [keySequence, setKeySequence] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      setKeySequence(prev => [...prev, event.key].slice(-5));
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const sequence = keySequence.join('');
    if (sequence === 'hello') {
      setEasterEggType('greeting');
      setEasterEgg(true);
    } else if (sequence === 'dance') {
      setEasterEggType('party');
      setEasterEgg(true);
    } else if (sequence === 'witu') {
      setEasterEggType('witu');
      setEasterEgg(true);
    }

    if (easterEgg) {
      setTimeout(() => {
        setEasterEgg(false);
        setEasterEggType('');
      }, 5000);
    }
  }, [keySequence, easterEgg]);

  useEffect(() => {
    if (easterEggType === 'party') {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [easterEggType]);

  const getEasterEggContent = () => {
    switch (easterEggType) {
      case 'greeting':
        return "🎉 You found an Easter egg! Thanks for exploring my journey! 🎉";
      case 'party':
        return (
          <div className="flex items-center justify-center text-2xl font-bold">
            <span className="animate-bounce mx-2">🕺</span>
            <span className="animate-color-change">Let's dance! You've unlocked the party mode!</span>
            <span className="animate-bounce mx-2">💃</span>
          </div>
        );
      case 'witu':
        return "🌟 You discovered the WITU Easter egg! If you're eligible, join WITU! 🌟";
      default:
        return "";
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden pt-8 ${easterEggType === 'party' ? 'animate-background-shift' : ''}`}>
      {showConfetti && <Confetti />}

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10"
      >
        <div className="text-center mb-16">
          <p className="section-subheading">Career</p>
          <h1 className="section-heading">My Professional Journey</h1>
        </div>

        {easterEgg && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`fixed top-0 left-0 w-full text-white text-center py-3 z-50 ${
              easterEggType === 'party' ? 'bg-rainbow animate-rainbow' : 'bg-rose-600'
            }`}
          >
            {getEasterEggContent()}
          </motion.div>
        )}

        <div className="space-y-20">
          <section aria-labelledby="work-experience">
            <h2 id="work-experience" className="font-serif text-2xl text-stone-900 dark:text-stone-50 mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300">
                <FaBriefcase aria-hidden="true" />
              </span>
              Work Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {exData.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="card card-hover p-6 h-full border-l-4 border-l-rose-500">
                    <div className="flex items-start gap-4 mb-4">
                      {data.Image ? (
                        <img
                          src={data.Image}
                          alt={`${data.Company} logo`}
                          className="w-14 h-14 rounded-xl object-contain bg-white dark:bg-stone-700 p-1 ring-1 ring-rose-100 dark:ring-stone-600 shrink-0"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-xl bg-rose-50 dark:bg-rose-950/60 flex items-center justify-center shrink-0">
                          <FaBuilding className="text-rose-600 dark:text-rose-300" aria-hidden="true" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">{data.Title}</h3>
                        <p className="text-rose-600 dark:text-rose-300 font-medium">{data.Company}</p>
                      </div>
                    </div>
                    <p className="text-muted text-sm mb-4 flex items-center gap-2">
                      <FaCalendarAlt className="text-rose-500 dark:text-rose-400 shrink-0" aria-hidden="true" />
                      {data.Date}
                    </p>
                    <ul className="text-body space-y-2 text-sm leading-relaxed">
                      {data.Description.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-rose-400 dark:text-rose-300 mt-1.5 shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section aria-labelledby="education">
            <h2 id="education" className="font-serif text-2xl text-stone-900 dark:text-stone-50 mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300">
                <FaGraduationCap aria-hidden="true" />
              </span>
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  school: "Brooklyn College",
                  degree: "Bachelor of Science in Computer Science",
                  date: "2021 - 2024",
                  achievements: [
                    "Dean's List: Spring 2024, Fall 2023, Spring 2023",
                    "Member of Computer Science Club",
                  ]
                },
                {
                  school: "Brooklyn Technical High School",
                  degree: "High School Diploma",
                  date: "2017 - 2021",
                  achievements: [
                    "Software Engineering Major",
                    "CTE Endorsement",
                  ]
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="card card-hover p-6 h-full border-l-4 border-l-rose-500">
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-1">{edu.degree}</h3>
                    <p className="text-rose-600 dark:text-rose-300 font-medium mb-3 flex items-center gap-2">
                      <FaBuilding className="shrink-0" aria-hidden="true" />
                      {edu.school}
                    </p>
                    <p className="text-muted text-sm mb-4 flex items-center gap-2">
                      <FaCalendarAlt className="text-rose-500 dark:text-rose-400 shrink-0" aria-hidden="true" />
                      {edu.date}
                    </p>
                    <ul className="text-body space-y-2 text-sm leading-relaxed">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-rose-400 dark:text-rose-300 mt-1.5 shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
