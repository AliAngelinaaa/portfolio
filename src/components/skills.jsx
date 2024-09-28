import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGit, FaDocker, FaAws, FaBrain, FaSlack, FaAndroid, FaUnity, FaFigma, FaDatabase, FaMicrosoft } from 'react-icons/fa';
import { SiCplusplus, SiTrello, SiPostgresql, SiMysql, SiGraphql, SiAutodesk, SiPostman, SiIntellijidea, SiVisualstudiocode, SiDatadog, SiVault, SiSumologic, SiCsharp, SiGo, SiRedux, SiSpring, SiArduino } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

function ConfettiEmoji({ emoji }) {
	return (
		<motion.div
			initial={{ y: -20, opacity: 0 }}
			animate={{
				y: ['0%', '100%'],
				opacity: [0, 1, 0],
				rotate: [0, 360],
			}}
			transition={{
				duration: Math.random() * 2 + 1,
				repeat: Infinity,
				repeatType: 'loop',
			}}
			className="absolute text-4xl"
			style={{
				left: `${Math.random() * 100}%`,
				top: `-20px`,
			}}
		>
			{emoji}
		</motion.div>
	);
}

function SkillCard({ title, skills, onSkillClick }) {
	return (
		<div id="skills" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
			<h3 className="text-xl font-semibold mb-4 text-pink-600">{title}</h3>
			<ul className="space-y-2">
				{skills.map((skill, index) => (
					<li key={index} className="flex items-center">
						<span onClick={() => onSkillClick(skill.name)} className="cursor-pointer">
							{skill.icon}
						</span>
						<span className="ml-2">{skill.name}</span>
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
					const randomRizz = javaRizzLines[Math.floor(Math.random() * javaRizzLines.length)];
					setCurrentRizz(randomRizz);
					setShowRizz(true);
					setTimeout(() => setShowRizz(false), 5000); // Hide joke after 5 seconds
					return 0; // Reset count
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
				{ name: "Python", icon: <FaPython className="text-pink-500" /> },
				{ name: "JavaScript", icon: <FaJs className="text-pink-500" /> },
				{ name: "Java", icon: <FaJava className="text-pink-500" /> },
				{ name: "C++", icon: <SiCplusplus className="text-pink-500" /> },
				{ name: "C#", icon: <SiCsharp className="text-pink-500" /> },
				{ name: "Go", icon: <SiGo className="text-pink-500" /> },
			],
		},
		{
			title: "Web Technologies",
			skills: [
				{ name: "HTML5", icon: <FaHtml5 className="text-pink-500" /> },
				{ name: "CSS3", icon: <FaCss3Alt className="text-pink-500" /> },
				{ name: "React", icon: <FaReact className="text-pink-500" /> },
				{ name: "Node.js", icon: <FaNodeJs className="text-pink-500" /> },
				{ name: "Redux", icon: <SiRedux className="text-pink-500" /> },
				{ name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
				{ name: "REST", icon: <FaDatabase className="text-pink-500" /> },
			],
		},
		{
			title: "Tools & Technologies",
			skills: [
				{ name: "Git", icon: <FaGit className="text-pink-500" /> },
				{ name: "Docker", icon: <FaDocker className="text-pink-500" /> },
				{ name: "AWS", icon: <FaAws className="text-pink-500" /> },
				{ name: "TensorFlow", icon: <FaBrain className="text-pink-500" /> },
				{ name: "PostgreSQL", icon: <SiPostgresql className="text-pink-500" /> },
				{ name: "MySQL", icon: <SiMysql className="text-pink-500" /> },
				{ name: "Spring", icon: <SiSpring className="text-pink-500" /> },
				{ name: "Arduino", icon: <SiArduino className="text-pink-500" /> },
			],
		},
		{
			title: "Development Tools",
			skills: [
				{ name: "Android Studio", icon: <FaAndroid className="text-pink-500" /> },
				{ name: "Unity", icon: <FaUnity className="text-pink-500" /> },
				{ name: "Figma", icon: <FaFigma className="text-pink-500" /> },
				{ name: "Postman", icon: <SiPostman className="text-pink-500" /> },
				{ name: "IntelliJ", icon: <SiIntellijidea className="text-pink-500" /> },
				{ name: "VS Code", icon: <SiVisualstudiocode className="text-pink-500" /> },
			],
		},
		{
			title: "Project Management & Collaboration",
			skills: [
				{ name: "Trello", icon: <SiTrello className="text-pink-500" /> },
				{ name: "Slack", icon: <FaSlack className="text-pink-500" /> },
				{ name: "Microsoft Office", icon: <FaMicrosoft className="text-pink-500" /> },
			],
		},
		{
			title: "Other Tools",
			skills: [
				{ name: "Autodesk", icon: <SiAutodesk className="text-pink-500" /> },
				{ name: "Datadog", icon: <SiDatadog className="text-pink-500" /> },
				{ name: "Vault", icon: <SiVault className="text-pink-500" /> },
				{ name: "Sumologic", icon: <SiSumologic className="text-pink-500" /> },
			],
		},
	];

	return (
		<section id="skills" className="py-16 relative">
			<AnimatePresence>
				{showRizz && (
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
						className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white p-4 rounded-lg shadow-lg max-w-sm z-50"
					>
						<p className="text-sm font-medium">Java Rizz: {currentRizz}</p>
					</motion.div>
				)}
				{showEasterEgg && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 pointer-events-none z-50"
					>
						{emojis.map((emoji, index) => (
							<ConfettiEmoji key={index} emoji={emoji} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<div className="container mx-auto px-4">
				<h2 ref={titleRef} className="text-3xl font-bold text-center mb-8 text-pink-700">Skills & Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, index) => (
						<SkillCard key={index} title={category.title} skills={category.skills} onSkillClick={handleSkillClick} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;