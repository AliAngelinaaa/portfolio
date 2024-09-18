import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../images/image.jpeg';
import '../style/home.css';

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
            {/* Navigation Bar */}
            <motion.nav
                className="bg-rose-100 rounded-md border-2 border-rose-100"
                initial={{ y: '-5vw', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: loading ? 1 : 0, type: 'spring', stiffness: 50 }}
            >
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <h1 className="flex items-center space-x-3">Nafisa Anzum</h1>
                    <ul className="flex flex-row space-x-8 font-medium">
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </motion.nav>

            {/* Main Content */}
            <div className="w-full mx-auto mt-2">
                <div className="flex flex-row gap-4 justify-center">
                    {/* Left Column */}
                    <div className="basis-2/3 space-y-2">
                        <div className="flex gap-2">
                            <motion.div
                                className="flex-1 p-4 rounded-md border-2 border-rose-100 bg-rose-100"
                                initial={{ x: '-5vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 1.5 : 0 }}
                            >
                                Quote
                            </motion.div>

                            <motion.div
                                className="flex-1 rounded-md"
                                initial={{ opacity: 1, scale: 2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 1, delay: loading ? 0.5 : 0 }}
                            >
                                <img src={image} class="object-cover h-80 w-full rounded-md"/>
                            </motion.div>
                        </div>

                        <div className="flex gap-2">
                            <motion.div
                                className="flex-1 p-4 rounded-md border-2 border-rose-100 bg-rose-100"
                                initial={{ x: '-5vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 2 : 0 }}
                            >
                                Down 1
                            </motion.div>

                            <motion.div
                                className="flex-1 p-4 rounded-md border-2 border-rose-300 bg-rose-300"
                                initial={{ y: '5vw', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: loading ? 2.5 : 0 }}
                            >
                                Contact Me
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
