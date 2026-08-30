import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGit, FaDocker, FaAws, FaBrain, FaSlack, FaAndroid, FaUnity, FaFigma, FaDatabase, FaMicrosoft } from 'react-icons/fa';
import { SiCplusplus, SiTrello, SiPostgresql, SiMysql, SiGraphql, SiAutodesk, SiPostman, SiIntellijidea, SiVisualstudiocode, SiDatadog, SiVault, SiSumologic, SiCsharp, SiGo, SiRedux, SiSpring, SiArduino } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

function ConfettiEmoji({ emoji }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: ['0%', '100%'], opacity: [0, 1, 0], rotate: [0, 360] }}
      transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, repeatType: 'loop' }}
      className="absolute text-4xl"
      style={{ left: `${Math.random() * 100}%`, top: '-20px' }}
    >
      {emoji}
    </motion.div>
  );
}

function SkillCard({ title, skills, onSkillClick }) {
  return (
    <div className="card card-hover p-6 group">
      <h3 className="font-serif text-xl text-stone-900 dark:text-stone-50 mb-5 pb-3 border-b border-rose-100 dark:border-stone-600">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3 text-body">
            <span
              onClick={() => onSkillClick(skill.name)}
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/60 transition-colors cursor-pointer shrink-0"
            >
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const [javaClickCount, setJavaClickCount] = useState(0);
  const [showRizz, setShowRizz] = useState(false);
  const [currentRizz, setCurrentRizz] = useState('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const titleRef = useRef(null);

  const javaRizzLines = [
    "Hey girl, are you a Java exception? Because you've caught my attention.",
    "Is your name Wi-Fi? Because I'm really feeling a connection.",
    "Are you a Java interface? Because you've got everything I'm looking for.",
    "Girl, you must be garbage collection because you're taking up all my memory.",
    "Are you a singleton? Because you're one of a kind.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "Are you a Java thread? Because you've got me parallelized.",
    "Girl, you must be a compiler because you're turning all my methods into actions.",
    "Are you a breakpoint? Because you've got me stopped in my tracks.",
    "Is your name Eclipse? Because you're eclipsing all other IDEs in my life."
  ];

  const handleSkillClick = useCallback((skillName) => {
    if (skillName === 'Java') {
      setJavaClickCount(prevCount => {
        const newCount = prevCount + 1;
        if (newCount === 3) {
          setCurrentRizz(javaRizzLines[Math.floor(Math.random() * javaRizzLines.length)]);
          setShowRizz(true);
          setTimeout(() => setShowRizz(false), 5000);
          return 0;
        }
        return newCount;
      });
    }
  }, []);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection.toString().trim().toLowerCase() === 'skills & expertise') {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 5000);
      }
    };
    document.addEventListener('selectionchange', handleSelection);
    return () => document.removeEventListener('selectionchange', handleSelection);
  }, []);

  const emojis = ['🚀', '💻', '🔧', '🎨', '📊', '🧠', '🌟', '🔥'];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4" /> },
        { name: "JavaScript", icon: <FaJs className="w-4 h-4" /> },
        { name: "Java", icon: <FaJava className="w-4 h-4" /> },
        { name: "C++", icon: <SiCplusplus className="w-4 h-4" /> },
        { name: "C#", icon: <SiCsharp className="w-4 h-4" /> },
        { name: "Go", icon: <SiGo className="w-4 h-4" /> },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="w-4 h-4" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-4 h-4" /> },
        { name: "React", icon: <FaReact className="w-4 h-4" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4" /> },
        { name: "Redux", icon: <SiRedux className="w-4 h-4" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-4 h-4" /> },
        { name: "REST", icon: <FaDatabase className="w-4 h-4" /> },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGit className="w-4 h-4" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4" /> },
        { name: "AWS", icon: <FaAws className="w-4 h-4" /> },
        { name: "TensorFlow", icon: <FaBrain className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4" /> },
        { name: "Spring", icon: <SiSpring className="w-4 h-4" /> },
        { name: "Arduino", icon: <SiArduino className="w-4 h-4" /> },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Android Studio", icon: <FaAndroid className="w-4 h-4" /> },
        { name: "Unity", icon: <FaUnity className="w-4 h-4" /> },
        { name: "Figma", icon: <FaFigma className="w-4 h-4" /> },
        { name: "Postman", icon: <SiPostman className="w-4 h-4" /> },
        { name: "IntelliJ", icon: <SiIntellijidea className="w-4 h-4" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="w-4 h-4" /> },
      ],
    },
    {
      title: "Project Management",
      skills: [
        { name: "Trello", icon: <SiTrello className="w-4 h-4" /> },
        { name: "Slack", icon: <FaSlack className="w-4 h-4" /> },
        { name: "Microsoft Office", icon: <FaMicrosoft className="w-4 h-4" /> },
      ],
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Autodesk", icon: <SiAutodesk className="w-4 h-4" /> },
        { name: "Datadog", icon: <SiDatadog className="w-4 h-4" /> },
        { name: "Vault", icon: <SiVault className="w-4 h-4" /> },
        { name: "Sumologic", icon: <SiSumologic className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <AnimatePresence>
        {showRizz && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 bg-rose-600 text-white px-6 py-3 rounded-2xl shadow-card max-w-sm z-50"
          >
            <p className="text-sm font-medium">{currentRizz}</p>
          </motion.div>
        )}
        {showEasterEgg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 pointer-events-none z-50">
            {emojis.map((emoji, index) => <ConfettiEmoji key={index} emoji={emoji} />)}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subheading">What I Know</p>
          <h2 ref={titleRef} className="section-heading">Skills & Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} title={category.title} skills={category.skills} onSkillClick={handleSkillClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
