import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll'; // {{ edit_1 }}

function Nav() {  
    const [loading, setLoading] = useState(true);
    const [clickCount, setClickCount] = useState(0);
    const [showCat, setShowCat] = useState(false);
    const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
    const [catMood, setCatMood] = useState('😺');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 1-second delay
        return () => clearTimeout(timer);
    }, []);
    
    const scrollToSection = (section) => { // {{ edit_2 }}
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -70, // Adjust this value based on your navbar height
        });

        if (section === 'home') {
            setClickCount(prevCount => {
                const newCount = prevCount + 1;
                if (newCount === 5) {
                    setShowCat(true);
                    setCatPosition({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight });
                }
                return newCount;
            });
        } else {
            setClickCount(0);
        }
    };

    const petCat = () => {
        setCatMood('😻');
        setTimeout(() => setCatMood('😺'), 1000);
    };

    const moveCat = () => {
        setCatPosition({ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
        });
        setCatMood('🙀');
        setTimeout(() => setCatMood('😺'), 500);
    };

    const rickRoll = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    };

    return (
        <motion.nav
        className="bg-rose-100 rounded-md bg-gradient-to-br from-rose-100 to-rose-200 border-rose-100 relative"
        initial={{ y: '-5vw', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: loading ? 1 : 0, type: 'spring', stiffness: 50 }}
    >
        {showCat && (
            <motion.div
                className="fixed text-4xl cursor-pointer z-50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: catPosition.x,
                    y: catPosition.y
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={petCat}
                onDoubleClick={moveCat}
            >
                {catMood}
            </motion.div>
        )}
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
                <h1 className="text-2xl mr-1 italic">Nafisa</h1>
                <h1 className="text-2xl cursor-pointer" onClick={rickRoll}>Anzum</h1>
            </div>
            <ul className="flex flex-row space-x-8 font-medium">
                <li><Link to="/" className="text-rose-600 hover:text-rose-800 font-bold" onClick={() => scrollToSection('home')}>Home</Link></li>
                <li><Link to="/" className="text-rose-600 hover:text-rose-800" onClick={() => scrollToSection('timeline')}>Projects</Link></li>
                <li><Link to="/" className="text-rose-600 hover:text-rose-800" onClick={() => scrollToSection('skills')}>Skills</Link></li>
            </ul>
        </div>
    </motion.nav>
    );
}

export default Nav;
