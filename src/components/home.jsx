import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../images/image.jpeg';
import "../style/home.css";
import { FaEnvelope } from 'react-icons/fa'; // Import at the top of your file
import bugsplat1 from '../images/bugsplat1.png';

function Home() {
    // State to manage loading animation
    const [loading, setLoading] = useState(true);

    // Hide everything else except the picture for 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 1-second delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div id="home">
            {/* Main Content */}
            <div className="mx-auto mt-4">
                <div className="flex flex-row gap-4 justify-center">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-2 w-2/3 gap-2">
                        <div className="flex gap-3">
                            {/* Left Column - Quote */}
                            <motion.div
                                className="flex-1 p-4 rounded-md border-2 border-rose-100 bg-rose-100"
                                initial={{ x: '-5vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 1.5 : 0 }}
                            >
                                Quote
                            </motion.div>

                            {/* Right Column - Image */}
                            <motion.div
                                className=" rounded-md"
                                initial={{ opacity: 1, scale: 2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 1, delay: loading ? 0.5 : 0 }}
                            >
                                <img src={image} className="aspect-[3/4] object-cover rounded-md imageNafisa" />
                            </motion.div>
                        </div>

                        <div className="flex gap-3">
                            <motion.div
                                className="aspect-[3/2] flex-1 p-4 rounded-md border-2 border-rose-100 bg-rose-100"
                                initial={{ x: '-5vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 2 : 0 }}
                            > 
                                <div className='flex-grow'></div>
                                <p>Nafisa is a software developer with a passion for creating innovative solutions to complex problems. She is a quick learner and a team player, always eager to take on new challenges.</p>
                            </motion.div>

                            <motion.div
                                className="aspect-[3/2] flex-1 p-4 rounded-md border-2 border-rose-300 bg-rose-300 flex flex-col"
                                initial={{ y: '5vw', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 2.5 : 0 }}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs">Have some questions?</span>
                                    <a href="#" className="w-6 h-6 text-rose-600 hover:text-rose-800 transition-all duration-500 ease-out transform hover:-translate-y-0.5 hover:translate-x-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex-grow"></div>
                                <div className="text-6xl font-bold text-center">Contact Me</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        className="w-1/3 gap-2 flex flex-col h-full"
                        initial={{ x: '5vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: loading ? 3 : 0 }}
                    >
                        <div className="flex-grow p-4 rounded-md border-2 border-rose-100 bg-rose-100 mb-2">
                            <div className="flex justify-between items-center mb-2">
                                <span>RosyPost</span>
                                <a href="#" className="w-6 h-6 text-rose-600 hover:text-rose-800 transition-all duration-500 ease-out transform hover:-translate-y-0.5 hover:translate-x-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                
                            </div>
                            <img></img>
                            <hr className="my-2 border-t-3 border-rose-400" />
                            <div className="py-3 text-left">PolyGlot Palace</div>
                            <hr className="my-2 border-t-3 border-rose-400" />
                            <div className="py-3 text-left">ClubFinder</div>
                            <hr className="my-2 border-t-3 border-rose-400" />
                            <div className="py-3 text-left">Study Timer</div>
                        </div>
                        <div className="p-2 rounded-md border-2 border-rose-100 bg-rose-100 flex justify-center space-x-4">
                            <a href="https://github.com/aliangelinaaa" target="_blank" rel="noopener noreferrer" className='font-sans hover:text-rose-800'> GITHUB</a>
                            <a href="https://www.linkedin.com/in/nafisaanzum" target="_blank" rel="noopener noreferrer" className=" hover:text-rose-800">LINKEDIN</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
