import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGit, FaDocker, FaAws, FaBrain, FaSlack, FaAndroid, FaUnity, FaFigma, FaDatabase, FaMicrosoft } from 'react-icons/fa';
import { SiCplusplus, SiTrello, SiPostgresql, SiMysql, SiGraphql, SiAutodesk, SiPostman, SiIntellijidea, SiVisualstudiocode, SiDatadog, SiVault, SiSumologic, SiCsharp, SiGo, SiRedux, SiSpring, SiArduino } from 'react-icons/si';

function SkillCard({ title, skills }) {
	return (
		<div id="skills" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
			<h3 className="text-xl font-semibold mb-4 text-pink-600">{title}</h3>
			<ul className="space-y-2">
				{skills.map((skill, index) => (
					<li key={index} className="flex items-center">
						{skill.icon}
						<span className="ml-2">{skill.name}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function Skills() {
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
		<section id="skills" className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8 text-pink-700">Skills & Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, index) => (
						<SkillCard key={index} title={category.title} skills={category.skills} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
