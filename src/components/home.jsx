import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../images/image.jpeg';
import "../style/home.css";
import { FaEnvelope } from 'react-icons/fa'; // Import at the top of your file

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
        <motion.div >
            {/* Main Content */}
            <div className="w-full mx-auto mt-2">
                <div className="flex flex-row gap-4 justify-center">
                    {/* Left Column */}
                    <div className="basis-2/3 space-y-2">
                        <div className="flex gap-2">
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
                                className="flex-1 rounded-md"
                                initial={{ opacity: 1, scale: 2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 1, delay: loading ? 0.5 : 0 }}
                            >
                                <img src={image} className="object-cover rounded-md imageNafisa" />
                            </motion.div>
                        </div>

                        <div className="flex gap-2">
                            <motion.div
                                className="flex-grow p-4 rounded-md border-2 border-rose-100 bg-rose-100"
                                initial={{ x: '-5vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 2 : 0 }}
                            >
                                Down 1
                            </motion.div>

                            <motion.div
                                className="aspect-square p-4 rounded-md border-2 border-rose-300 bg-rose-300 flex flex-col"
                                initial={{ y: '5vw', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 2.5 : 0 }}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs">Have some questions?</span>
                                    <a href="#" className="w-4 h-4 text-rose-600 hover:text-rose-800 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex-grow"></div>
                                <div className="text-5xl font-bold text-center">Contact Me</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        className="basis-1/3 p-4 rounded-md border-2 border-rose-100 bg-rose-100"
                        initial={{ x: '5vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: loading ? 3 : 0 }}
                    >
                        Quick Links for Projects
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
