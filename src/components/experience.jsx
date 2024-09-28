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

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
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
    <div className={`min-h-screen relative overflow-hidden ${easterEggType === 'party' ? 'animate-background-shift' : ''}`}>
      {showConfetti && <Confetti />}
      {/* Abstract animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          {/* Existing flower outline animation */}
          <div className="flower-outline w-[800px] h-[800px] absolute top-1/2 left-1/2 -mt-[400px] -ml-[400px] bg-no-repeat bg-center bg-contain animate-rotate"></div>
          
          {/* New abstract shapes with distributed positioning */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute -top-10 right-1/3 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-6000"></div>
          <div className="absolute -bottom-10 left-1/3 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-8000"></div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-16 text-center">My Professional Journey</h1>
        
        {easterEgg && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`fixed top-0 left-0 w-full text-white text-center py-2 z-50 ${
              easterEggType === 'party' ? 'bg-rainbow animate-rainbow' : 'bg-rose-500'
            }`}
          >
            {getEasterEggContent()}
          </motion.div>
        )}

        <div className="space-y-20">
          <section aria-labelledby="work-experience">
            <h2 id="work-experience" className="text-3xl font-semibold text-gray-800 mb-10 flex items-center">
              <FaBriefcase className="mr-3 text-rose-600" aria-hidden="true" /> Work Experience
            </h2>
            <div className="flex flex-wrap -mx-4">
              {exData.map((data, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full md:w-1/2 px-4 mb-8"
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-rose-500 h-full">
                    <div className="flex items-center mb-4">
                      {data.Image ? (
                        <img 
                          src={data.Image} 
                          alt={`${data.Company} logo`} 
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-contain mr-4 bg-white p-1"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4">
                          <FaBuilding className="text-rose-600" aria-hidden="true" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{data.Title}</h3>
                        <p className="text-rose-600">{data.Company}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <FaCalendarAlt className="mr-2 text-rose-600" aria-hidden="true" /> {data.Date}
                    </p>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      {data.Description.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section aria-labelledby="education">
            <h2 id="education" className="text-3xl font-semibold text-gray-800 mb-10 flex items-center">
              <FaGraduationCap className="mr-3 text-rose-600" aria-hidden="true" /> Education
            </h2>
            <div className="md:flex md:flex-wrap md:-mx-4">
              {[{
                school: "Brooklyn College",
                degree: "Bachelor of Science in Computer Science",
                date: "2021 - 2024",
                achievements: [
                  "Dean's List: Spring 2024, Fall 2023, Spring 3033",
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
              }].map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="md:w-1/2 md:px-4 mb-8"
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-rose-500 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-rose-600 mb-2 flex items-center">
                      <FaBuilding className="mr-2" aria-hidden="true" /> {edu.school}
                    </h4>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <FaCalendarAlt className="mr-2 text-rose-600" aria-hidden="true" /> {edu.date}
                    </p>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
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