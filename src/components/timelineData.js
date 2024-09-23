import bugsplat1 from '../images/bugsplat1.png';
import bugsplat1momma from '../images/bugsplat1momma.png';
import pvpafter from '../images/1v1after.png';

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
        `
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
        "description": "A short but important journey at Feni Govt College."
    },
    {
        "title": "Club Finder",
        "date": "Spring 2023",
        "description": "This was a project created for Human and Computer Interaction class. The goal was to create a website that would help people find clubs and organizations within CUNY. We worked in teams of four and had to create a website that would help people find clubs and organizations within all the colleges as many people do not know what their options are. I took the lead on the website as the project manager and worked on the website with my team. I learned a lot about project management and how to work with others to meet a common goal. It was a great learning experience and I am proud of the website we created."
    },
    {
        "title": "Procrasination the game",
        "date": "Spring 2023",
        "description": "<p class='text-sm md:text-base leading-relaxed text-gray-700'>Developed as part of <span class='font-semibold'>CISC 3665: Game Design and Development</span> course, this game is designed to raise awareness about procrastination and offer strategies to overcome it. Dive into an interactive experience that not only entertains but educates users on managing time effectively.</p><p class='mt-2'><a href='https://owenl0000.itch.io/procrastination' class='text-rose-600 hover:text-rose-800 underline' target='_blank'>Play the game here</a>.</p>"


    },
    {
        "title": "Baby Bloom",
        "date": "Spring 2023",
        "description": "<p>this was created for intro to software engineering where we learned alot of agile and android developement."
    },
    {
        "title": "Polyglot Palace",
        "date": "July 2023",
        "description": "A short but important journey at Feni Govt College."
    },
    {
        "title": "GitPulse",
        "date": "August 2023"
    },
    {
        "title": "Leet Sensei",
        "date": "October 2023",
        "description": ""
    },
    {
        "title": "Rosy Post",
        "date": "July - August 2024",
        "description": "This was created as a New York Times maker week project. The New York Times have a yearly one week hackathon where developers and other members within the company come together and get to work on projects and learn new things. This is also the best time to meet new people and get closer with your team as everyone comes over to the NYC office during this time. My internship had me using a bit of Go so I decided to learn more about the language and create a product that WITU may use in the end."
    }
];

export default timelineData;
