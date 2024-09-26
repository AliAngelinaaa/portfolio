import bugsplat1 from '../images/bugsplat1.png';
import bugsplat1momma from '../images/bugsplat1momma.png';
import pvpafter from '../images/1v1after.png';
import clubfinder from '../images/clubfinder.png';
import clubfinder1 from '../images/clubfinder1.png';
import clubfinder2 from '../images/clubfinder2.png';
import gitpulse1 from '../images/gitpulse1.png';
import gitpulse2 from '../images/gitpulse2.png';


const timelineData = [
    {
        "title": "One on One Fighter",
        "date": "November 2019",
        "description": `
            <p class="mb-4">This game was made as part of Unit 3 in Web Development class back in my junior year of high school. It was later hosted on github pages as a way to update and show my progress as a developer.</p>
            
            <h3 class="text-xl font-bold mb-2">Media</h3>
            <p class="mb-2">Below are some before and after screenshots of the game:</p>
            <img src=${bugsplat1} alt="Before Image" class="w-full mb-2 rounded-lg shadow-md" />

            <p class="mb-2">Here is how it looks now:</p>
            <img src=${pvpafter} alt="After Image" class="w-full rounded-lg shadow-md" />
        `,
        "link": "https://aliangelinaaa.github.io/One-On-One-Fighter/"
    },
    {
        "title": "Bug Splat",
        "date": "November 2019",
        "description": `
            <p class="mb-4"><strong class="font-bold">Bug Splat</strong> is a simple yet engaging web-based game where players must eliminate alien bugs that have infested their home.</p>
            
            <h3 class="text-xl font-bold mb-2">Game Description</h3>
            <p class="mb-4">Your home is under siege by dangerous alien bugs. Negotiations have failed, so you have no choice but to splat them. Click on 15 bugs to eliminate them, but beware—these bugs won't go down without a fight, making comments to try and dissuade you. The game features two modes: regular and "more annoying" mode for an extra challenge.</p>
    
            <h3 class="text-xl font-bold mb-2">Media</h3>
            <p class="mb-2">Below are some before and after screenshots of the game:</p>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <img src=${bugsplat1} alt="Before Image 1" class="w-full rounded-lg shadow-md" />
                <img src=${bugsplat1momma} alt="Before Image 2" class="w-full rounded-lg shadow-md" />
            </div>

            <p class="mb-2">Here is how it looks now:</p>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <img src=${bugsplat1} alt="After Image 1" class="w-full rounded-lg shadow-md" />
                <img src=${bugsplat1momma} alt="After Image 2" class="w-full rounded-lg shadow-md" />
            </div>
    
            <h3 class="text-xl font-bold mb-2">Links</h3>
            <p class="mb-2">View the demo <a href="https://example.com/demo" target="_blank" class="text-blue-600 hover:text-blue-800 underline">here</a>.</p>
            <p>Access the repository <a href="https://github.com/example/bugsplat" target="_blank" class="text-blue-600 hover:text-blue-800 underline">here</a>.</p>
        `
    },
    {
        "title": "Study Timer",
        "date": "April 2022",
        "description": "Created during Break Through Tech's first ever Spring Guild. Introduction to bootstrap. Was working in a group of 2 within a time span of 8 hours to complete."
    },
    {
        "title": "To-Do List",
        "date": "February 2022",
        "description": "Created during Break Through Tech's first ever Spring Guild."
    },
    {
        "title": "Club Finder",
        "date": "Spring 2023",
        "description": `
            <p class="mb-4">This project was created for the Human and Computer Interaction class. The goal was to create a website that would help people find clubs and organizations within CUNY. We worked in teams of four, and I served as the project manager, leading the website development. This experience taught me valuable lessons in project management and teamwork, resulting in a website that we were all proud of.</p>
            
            <h3 class="text-xl font-bold mb-2">Media</h3>
            <div class="grid grid-cols-1 gap-4 mb-4">
                <img src=${clubfinder} alt="Club Finder Screenshot 1" class="w-full max-w-2xl mx-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onclick="openImageModal(this.src)" />
                <img src=${clubfinder1} alt="Club Finder Screenshot 2" class="w-full max-w-2xl mx-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onclick="openImageModal(this.src)" />
                <img src=${clubfinder2} alt="Club Finder Screenshot 3" class="w-full max-w-2xl mx-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onclick="openImageModal(this.src)" />
            </div>
        `
    },
    {
        "title": "Procrasination the game",
        "date": "Spring 2023",
        "description": "<p class='text-sm md:text-base leading-relaxed text-gray-700'>Developed as part of <span class='font-semibold'>CISC 3665: Game Design and Development</span> course, this game is designed to raise awareness about procrastination and offer strategies to overcome it. Dive into an interactive experience that not only entertains but educates users on managing time effectively.</p>",
        "link":"https://owenl0000.itch.io/procrastination"
    },
    {
        "title": "Baby Bloom",
        "date": "Spring 2023",
        "description": "<p>This project was created for the Intro to Software Engineering class, where we learned a lot about Agile methodologies and Android development.</p>"
    },
    {
        "title": "Polyglot Palace",
        "date": "July 2023",
        "description": "This project was built in three weeks as part of TTP, where we were grouped into teams of four to showcase our skills learned in the first four weeks."
    },
    {
        "title": "GitPulse",
        "date": "August 2023",
        "description": `
            <p class="mb-4">
    GitPulse was a dynamic, three-week project undertaken during TTP, where our team of eight was tasked with developing a comprehensive GitHub dashboard. As the accessibility engineer, I worked closely with the UI/UX manager to ensure the interface was intuitive, inclusive, and easy to navigate. GitPulse offers 15 key metrics, allowing users to monitor productivity trends and track open issues over time, providing valuable insights for effective project management.
</p>

<h3 class="text-xl font-bold mb-2">Media</h3>
<div class="grid grid-cols-1 gap-4 mb-4">
    <img src=${gitpulse1} alt="GitPulse Screenshot 1" class="w-full max-w-2xl mx-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onclick="openImageModal(this.src)" />
    <img src=${gitpulse2} alt="GitPulse Screenshot 2" class="w-full max-w-2xl mx-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onclick="openImageModal(this.src)" />
</div>

        `
    },
    {
        "title": "Leet Sensei",
        "date": "October 2023",
        "description": "<p>This was our submission for Hack Harvard 2023. Although we didn't win, I’m proud of the project’s success and the team's determination. I played a key role in encouraging the team to continue despite the challenges and limited knowledge of some technologies.</p>"
    },
    {
        "title": "Rosy Post",
        "date": "July - August 2024",
        "description": "<p>This project was created as part of the New York Times Maker Week, an annual hackathon where developers collaborate on innovative projects. As part of my internship, I worked with Go, learning more about the language and contributing to a product that WITU may use in the future.</p>"
    }
];

export default timelineData;
