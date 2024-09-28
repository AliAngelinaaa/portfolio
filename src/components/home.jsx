import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../images/image.jpeg';
import "../style/home.css";
import { FaHeart } from 'react-icons/fa'; // Added FaFlower
import { Link } from 'react-router-dom';
import { FlowerIcon } from 'hugeicons-react';
import IMG_3744 from '../images/IMG_3744.jpg';


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
        <motion.div id="home" className="font-nunito sm:text-[1vw]">
            {/* Main Content */}
            <div className="mx-auto mt-4 px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-2 w-full sm:w-2/3 gap-2">
                        <div className="flex flex-col sm:flex-row gap-3">
                            {/* Left Column - Quote */}
                            <motion.div
                                className="flex-1 p-4 rounded-md border-2 border-rose-100 bg-gradient-to-br from-rose-100 to-rose-200 flex flex-col justify-center items-center"

                                initial={{ x: '-5vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 1.5 : 0 }}
                            >
                                <div className="text-center mb-2">
                                    <FaHeart className="w-6 h-6 sm:w-[1.5vw] sm:h-[1.5vw] text-rose-600 mx-auto" />
                                </div>
                                <p className="sm:text-[2vw] leading-relaxed italic mb-2 text-center">
                                    "A passionate developer eager to make a meaningful impact on the world, whether through
                                    <span className="font-bold text-rose-600"> vlogging and video editing</span>,
                                    expressing creativity as a <span className="font-bold">writer</span>, or
                                    <span className="font-bold text-rose-600"> helping others with genuine passion</span>."
                                </p>
                            </motion.div>

                            {/* Right Column - Image */}
                            <motion.div
                                className="rounded-md mt-4 sm:mt-0"
                                initial={{ opacity: 1, scale: 2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 1, delay: loading ? 0.5 : 0 }}
                            >
                                <img src={image} className="w-full sm:w-auto aspect-[3/4] object-cover rounded-md imageNafisa" alt="Nafisa" />
                            </motion.div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <motion.div
                                className="aspect-auto sm:aspect-[3/2] flex-1 p-4 rounded-md border-2 border-rose-100 bg-gradient-to-br from-rose-100 to-rose-200 flex flex-col justify-end"
                                initial={{ x: '-5vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 2 : 0 }}
                            >
                                <div className="text-center mb-2">
                                    <FlowerIcon className="w-6 h-6 sm:w-[1.5vw] sm:h-[1.5vw] text-rose-600 mx-auto" />
                                </div>
                                <div className="">
                                    Nafisa is a software developer with a passion for creating innovative solutions to complex problems. Graduating college in just three years, she has proven herself capable of handling demanding challenges. As the co-founder of WIT Unite, she is dedicated to empowering others while fostering a supportive environment for learning and growth. Nafisa thrives as a team player and is constantly seeking opportunities to learn and make a meaningful impact.
                                </div>
                            </motion.div>

                            <motion.div
                                className="aspect-auto sm:aspect-[3/2] flex-1 p-4 rounded-md border-2 border-rose-300 bg-rose-300 flex flex-col"
                                initial={{ y: '5vw', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 2.5 : 0 }}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span>Have some questions?</span>
                                    <a href="#" className="w-6 h-6 text-rose-600 hover:text-rose-800 transition-all duration-500 ease-out transform hover:-translate-y-0.5 hover:translate-x-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex-grow"></div>
                                <div className="text-3xl sm:text-[4vw] font-bold text-center leading-none">Contact Me</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        className="sm:w-1/3 flex flex-col mt-4 sm:mt-0 gap-4"
                        initial={{ x: '5vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: loading ? 3 : 0 }}
                    >
                        <div className="flex flex-col p-4 rounded-md border-2 border-rose-100 bg-gradient-to-br from-rose-100 to-rose-200 mb-2 font-bold ">
                            <Link to="/experience" className="mb-2 font-bold py-2 hover:text-rose-800">
                                <div className="flex justify-between items-center ">
                                    Experience
                                    <div className="w-6 h-6 text-rose-600 hover:text-rose-800 transition-all duration-500 ease-out transform hover:-translate-y-0.5 hover:translate-x-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                            <hr className="my-2 border-t-3 border-rose-400" />
                            <div className="py-4 text-left  ">
                                <a href="https://sites.google.com/view/aliangelinaa/" target="_blank" rel="noopener noreferrer" className='font-bold hover:text-rose-800'>Previous Portfolio</a>
                            </div>
                            <hr className="my-2 border-t-3 border-rose-400" />
                            <div className="py-4 text-left">ClubFinder</div>
                            <hr className="my-2 border-t-3 border-rose-400" />
                            <div className="py-4 text-left">Your face</div>
                            <img src={IMG_3744} className="rounded-lg mt-auto" alt="Your face" />
                        </div>
                        <div className="p-5 rounded-md border-2 border-rose-100 bg-gradient-to-br from-rose-100 to-rose-200 flex justify-center space-x-10 ">
                            <a href="https://github.com/aliangelinaaa" target="_blank" rel="noopener noreferrer" className="hover:text-rose-800 font-bold">GITHUB</a>
                            <a href="https://www.linkedin.com/in/nafisaanzum" target="_blank" rel="noopener noreferrer" className="hover:text-rose-800 font-bold">LINKEDIN</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
